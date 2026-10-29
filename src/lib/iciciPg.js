import crypto from "crypto";

export function getSiteUrl() {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "http://localhost:3000";
  return url.replace(/\/$/, "");
}

export function getIciciConfig() {
  const trim = (v) => (typeof v === "string" ? v.trim() : v || "");
  const secretKey = trim(process.env.ICICI_PG_HASH_KEY) || trim(process.env.ICICI_PG_SECRET_KEY);
  return {
    merchantId: trim(process.env.ICICI_PG_MERCHANT_ID),
    aggregatorId: trim(process.env.ICICI_PG_AGGREGATOR_ID),
    secretKey,
    initiateUrl:
      trim(process.env.ICICI_PG_INITIATE_URL) ||
      "https://pgpay.icicibank.com/pg/api/v2/initiateSale",
    commandUrl:
      trim(process.env.ICICI_PG_COMMAND_URL) ||
      "https://pgpay.icicibank.com/pg/api/command",
  };
}

export function assertIciciConfigured() {
  const config = getIciciConfig();
  if (!config.merchantId) {
    throw new Error(
      "ICICI_PG_MERCHANT_ID is missing in .env (use MID from ICICI: 100000000505192)."
    );
  }
  if (!config.secretKey) {
    throw new Error(
      "ICICI hash secret is empty. Set ICICI_PG_HASH_KEY (preferred) or ICICI_PG_SECRET_KEY from ICICI portal → Live keys → Key management → Generate/Download key. Restart npm run dev after saving .env."
    );
  }
  if (!config.aggregatorId) {
    throw new Error(
      "ICICI_PG_AGGREGATOR_ID is missing in .env (use Aggregator ID from ICICI: 100000000505191)."
    );
  }
  return config;
}

/** HMAC-SHA256 secureHash (Orange PG / PhiCommerce / JioPay style) */
export function buildSecureHash(payload, secretKey) {
  const data = { ...payload };
  delete data.secureHash;

  const message = Object.keys(data)
    .sort()
    .map((key) => {
      const value = data[key];
      if (value === null || value === undefined) return "";
      return String(value);
    })
    .join("");

  if (process.env.ICICI_PG_DEBUG === "1") {
    console.log("[ICICI PG] secureHash message (values only, sorted keys):", message);
  }

  // JioPay / PhiCommerce reference: HMAC key UTF-8, message ASCII
  return crypto
    .createHmac("sha256", Buffer.from(secretKey, "utf8"))
    .update(Buffer.from(message, "ascii"))
    .digest("hex");
}

export function hashMismatchHelp() {
  return (
    "Secure hash does not match. This usually means the wrong key is in .env — use the Live Hash Secret from ICICI portal (Key management → Generate/Download), not a Key ID or UAT key. " +
    "Set ICICI_PG_HASH_KEY=... (or ICICI_PG_SECRET_KEY). Regenerate the key in the portal if needed, restart npm run dev, or ask ICICI support to verify your hash for a sample initiateSale payload."
  );
}

export function verifySecureHash(payload, secretKey) {
  const received = payload?.secureHash;
  if (!received || !secretKey) return false;
  const expected = buildSecureHash(payload, secretKey);
  return expected.toLowerCase() === String(received).toLowerCase();
}

export function formatAmount(amount) {
  const num = Number(amount);
  if (!Number.isFinite(num) || num <= 0) {
    throw new Error("Invalid payment amount");
  }
  return num.toFixed(2);
}

export function formatTxnDate(date = new Date()) {
  const pad = (n) => String(n).padStart(2, "0");
  return (
    `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}` +
    `${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`
  );
}

export function generateMerchantTxnNo() {
  return `DC${Date.now()}`.slice(0, 20);
}

export async function initiateIciciSale(order) {
  const config = assertIciciConfigured();

  const merchantTxnNo = generateMerchantTxnNo();
  const returnURL = `${getSiteUrl()}/api/payments/icici/return`;

  const payload = {
    amount: formatAmount(order.amount),
    currencyCode: "356",
    customerEmailID: order.email || "guest@dynacleanindustries.com",
    customerMobileNo: order.phone || "9999999999",
    customerName: (order.name || "Customer").slice(0, 45),
    merchantId: config.merchantId,
    aggregatorID: config.aggregatorId,
    merchantTxnNo,
    payType: "0",
    returnURL,
    transactionType: "SALE",
    txnDate: formatTxnDate(),
    txnChannel: "WEB",
  };

  payload.secureHash = buildSecureHash(payload, config.secretKey);

  const response = await fetch(config.initiateUrl, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.respDescription || data.responseDescription || "Payment gateway error");
  }

  if (data.responseCode !== "R1000") {
    const desc =
      data.respDescription ||
      data.responseDescription ||
      `Gateway declined (${data.responseCode || "unknown"})`;
    if (data.responseCode === "P1006" && /secure hash/i.test(desc)) {
      throw new Error(hashMismatchHelp());
    }
    throw new Error(desc);
  }

  if (!verifySecureHash(data, config.secretKey)) {
    throw new Error("Invalid secure hash in gateway response");
  }

  if (!data.redirectURI || !data.tranCtx) {
    throw new Error("Incomplete response from payment gateway");
  }

  const redirectUrl = `${data.redirectURI}?tranCtx=${encodeURIComponent(data.tranCtx)}`;

  return {
    merchantTxnNo,
    redirectUrl,
    tranCtx: data.tranCtx,
  };
}

export async function checkIciciTransactionStatus(merchantTxnNo) {
  const config = getIciciConfig();
  if (!config.merchantId || !config.secretKey) {
    throw new Error("ICICI payment is not configured");
  }

  const payload = {
    merchantId: config.merchantId,
    aggregatorID: config.aggregatorId,
    merchantTxnNo,
    originalTxnNo: merchantTxnNo,
    transactionType: "STATUS",
  };

  payload.secureHash = buildSecureHash(payload, config.secretKey);

  const response = await fetch(config.commandUrl, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));
  return data;
}
