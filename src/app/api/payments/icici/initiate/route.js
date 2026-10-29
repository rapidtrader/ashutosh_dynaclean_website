import { initiateIciciSale } from "@/lib/iciciPg";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const body = await req.json();
    const amount = Number(body.amount);

    if (!Number.isFinite(amount) || amount <= 0) {
      return Response.json({ message: "Invalid order amount." }, { status: 400 });
    }

    const delivery = body.deliveryDetails || {};
    if (!delivery.name?.trim() || !delivery.phone?.trim() || !delivery.address?.trim()) {
      return Response.json(
        { message: "Delivery name, phone and address are required." },
        { status: 400 }
      );
    }

    const originHeader = req.headers.get("origin");
    const referer = req.headers.get("referer");
    const refererOrigin = referer ? new URL(referer).origin : undefined;
    const paymentOrigin =
      body.paymentOrigin?.trim() || originHeader || refererOrigin;

    const result = await initiateIciciSale({
      amount,
      name: delivery.name.trim(),
      email: delivery.email?.trim(),
      phone: delivery.phone.trim(),
      paymentOrigin,
    });

    console.log(
      "[ICICI PG] initiate OK",
      result.merchantTxnNo,
      "returnURL:",
      result.returnURL ?? "(portal default)"
    );

    return Response.json({
      message: "Redirecting to ICICI payment page…",
      redirectUrl: result.redirectUrl,
      merchantTxnNo: result.merchantTxnNo,
    });
  } catch (error) {
    console.error("ICICI initiate error:", error);
    return Response.json(
      {
        message:
          error.message ||
          "Could not start ICICI payment. Check server logs and .env configuration.",
      },
      { status: 500 }
    );
  }
}
