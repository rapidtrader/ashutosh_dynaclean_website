import { NextResponse } from "next/server";
import { checkIciciTransactionStatus, getSiteUrl } from "@/lib/iciciPg";

export const runtime = "nodejs";

async function parseReturnPayload(req) {
  const contentType = req.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return req.json();
  }

  if (contentType.includes("form")) {
    const formData = await req.formData();
    return Object.fromEntries(formData.entries());
  }

  const url = new URL(req.url);
  return Object.fromEntries(url.searchParams.entries());
}

function redirectToThankYou(params) {
  const base = getSiteUrl();
  const url = new URL("/thank-you", base);
  url.searchParams.set("payment", "icici");
  if (params.merchantTxnNo) url.searchParams.set("txn", params.merchantTxnNo);
  if (params.status) url.searchParams.set("status", params.status);
  if (params.responseCode) url.searchParams.set("code", params.responseCode);
  return NextResponse.redirect(url.toString(), 303);
}

async function handleReturn(req) {
  try {
    const payload = await parseReturnPayload(req);
    const merchantTxnNo =
      payload.merchantTxnNo || payload.originalTxnNo || payload.merchantRefNo;

    let status = "pending";
    let responseCode = payload.responseCode || "";

    if (merchantTxnNo) {
      try {
        const statusData = await checkIciciTransactionStatus(String(merchantTxnNo));
        responseCode = statusData.responseCode || responseCode;
        if (["S0001", "0000", "00"].includes(String(responseCode))) {
          status = "success";
        } else if (responseCode) {
          status = "failed";
        }
      } catch (statusError) {
        console.warn("ICICI status check failed:", statusError.message);
      }
    }

    return redirectToThankYou({
      merchantTxnNo: merchantTxnNo ? String(merchantTxnNo) : "",
      status,
      responseCode: String(responseCode),
    });
  } catch (error) {
    console.error("ICICI return handler error:", error);
    return redirectToThankYou({ status: "error" });
  }
}

export async function POST(req) {
  return handleReturn(req);
}

export async function GET(req) {
  return handleReturn(req);
}
