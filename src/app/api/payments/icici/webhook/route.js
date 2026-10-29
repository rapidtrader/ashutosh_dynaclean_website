import { verifySecureHash, getIciciConfig } from "@/lib/iciciPg";

export const runtime = "nodejs";

/** Payment Advice / webhook from ICICI Orange PG (configure URL in merchant dashboard) */
export async function POST(req) {
  try {
    const payload = await req.json();
    const { secretKey } = getIciciConfig();

    if (secretKey && !verifySecureHash(payload, secretKey)) {
      console.error("ICICI webhook: invalid secureHash", payload.merchantTxnNo);
      return Response.json({ message: "Invalid hash" }, { status: 400 });
    }

    console.log("ICICI payment webhook:", {
      merchantTxnNo: payload.merchantTxnNo,
      responseCode: payload.responseCode,
      respDescription: payload.respDescription,
    });

    return Response.json({ message: "OK" });
  } catch (error) {
    console.error("ICICI webhook error:", error);
    return Response.json({ message: "Webhook error" }, { status: 500 });
  }
}
