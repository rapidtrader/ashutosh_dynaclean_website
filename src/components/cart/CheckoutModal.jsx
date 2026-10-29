"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { calculateGst, formatInr, GST_PERCENT_LABEL } from "@/lib/cartPricing";

function isDeliveryComplete(details) {
  return Boolean(
    details.name?.trim() && details.phone?.trim() && details.address?.trim()
  );
}

/** Set to true when Razorpay / ICICI online checkout is live */
const ONLINE_PAYMENTS_LIVE = false;
/** Set to true when Cash on Delivery checkout is live */
const COD_LIVE = false;

const CHECKOUT_COMING_SOON_MSG =
  "This payment option is coming soon. Please check back shortly or contact us to place your order.";

export default function CheckoutModal({ isOpen, onClose, cart, cartSubtotal }) {
  const [paymentMode, setPaymentMode] = useState("prepaid");
  const [paymentGateway, setPaymentGateway] = useState("icici");
  const [pincode, setPincode] = useState("201201");
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  const [payError, setPayError] = useState("");
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const { subtotal, gstAmount, totalWithGst } = calculateGst(cartSubtotal);
  const shippingCost = 0;
  const codFee = paymentMode === "cod" && COD_LIVE ? Math.round(subtotal * 0.05) : 0;
  const youPay = totalWithGst + shippingCost + codFee;

  const totalItems = cart.reduce((count, item) => count + item.quantity, 0);
  const deliveryComplete = isDeliveryComplete(deliveryDetails);

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);
  const formattedDate = deliveryDate.toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    setPayError("");
    if (!deliveryComplete) {
      setIsEditingAddress(true);
    } else {
      setIsEditingAddress(false);
    }
  }, [isOpen, deliveryComplete]);

  if (!isOpen) return null;

  const handleToggleDeliveryForm = () => {
    if (isEditingAddress) {
      if (!isDeliveryComplete(deliveryDetails)) {
        setPayError("Please enter your name, phone number, and full address.");
        return;
      }
      setPayError("");
    }
    setIsEditingAddress(!isEditingAddress);
  };

  const handlePayNow = async () => {
    if (!deliveryComplete) {
      setPayError("Please add your delivery details before payment.");
      setIsEditingAddress(true);
      return;
    }

    if (paymentMode === "cod") {
      if (!COD_LIVE) {
        setPayError(CHECKOUT_COMING_SOON_MSG);
        return;
      }
      alert(
        "Cash on Delivery selected. Our team will confirm your order on the phone number provided."
      );
      return;
    }

    if (paymentMode === "prepaid") {
      if (!ONLINE_PAYMENTS_LIVE) {
        setPayError(CHECKOUT_COMING_SOON_MSG);
        return;
      }

      if (paymentGateway === "razorpay") {
        setPayError(CHECKOUT_COMING_SOON_MSG);
        return;
      }

      if (paymentGateway !== "icici") return;
    } else {
      return;
    }

    setIsPaying(true);
    setPayError("");

    try {
      const res = await fetch("/api/payments/icici/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: youPay,
          cartSubtotal: subtotal,
          gstAmount,
          cartTotalWithGst: totalWithGst,
          shippingCost,
          pincode,
          deliveryDetails,
          cart,
          paymentOrigin: window.location.origin,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Could not start payment.");
      }

      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
        return;
      }

      throw new Error("Payment gateway did not return a redirect URL.");
    } catch (error) {
      setPayError(error.message || "Payment failed. Please try again.");
    } finally {
      setIsPaying(false);
    }
  };

  const inputClass =
    "w-full p-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white";
  const sectionTitleClass = "text-sm font-semibold text-gray-800 mb-3";
  const cardClass = "rounded-lg border border-gray-200 bg-gray-50 p-4";

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative flex w-full max-w-6xl max-h-[95vh] flex-col overflow-hidden rounded-xl bg-white text-gray-800 shadow-2xl">
        <div className="flex shrink-0 items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 px-5 py-4 text-white md:px-8">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-white/90 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Back to cart"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="min-w-0 flex-1">
            <p className="text-xs uppercase tracking-widest text-white/80">
              {deliveryComplete ? "Step 2 of 2" : "Step 1 of 2"}
            </p>
            <h2 className="font-poppins text-xl font-bold text-white md:text-2xl">
              {deliveryComplete ? "Payment" : "Delivery Details"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-2xl leading-none text-white/90 hover:text-white"
            aria-label="Close checkout"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
          {/* Left Column */}
          <div className="border-b border-gray-200 bg-white p-6 md:p-8 lg:border-b-0 lg:border-r">
            {!deliveryComplete && !isEditingAddress && (
              <button
                type="button"
                onClick={() => setIsEditingAddress(true)}
                className="mb-6 flex w-full items-center justify-between gap-3 rounded-lg border-2 border-red-600 bg-red-50 px-4 py-4 text-left transition-colors hover:bg-red-100"
              >
                <div>
                  <p className="text-sm font-semibold text-gray-800">Add delivery details</p>
                  <p className="mt-1 text-xs text-gray-600">
                    Name, phone, and address required before payment
                  </p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-red-600">Add →</span>
              </button>
            )}

            <div className="mb-6">
              <div className="mb-3 flex items-center justify-between">
                <h3 className={sectionTitleClass}>Delivery Details</h3>
                {(deliveryComplete || isEditingAddress) && (
                  <button
                    type="button"
                    onClick={handleToggleDeliveryForm}
                    className="text-sm font-semibold text-red-600 hover:text-red-700"
                  >
                    {isEditingAddress ? "Save" : "Edit"}
                  </button>
                )}
              </div>

              {isEditingAddress ? (
                <div className={`space-y-3 ${cardClass}`}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={deliveryDetails.name}
                    onChange={(e) => setDeliveryDetails({ ...deliveryDetails, name: e.target.value })}
                    className={inputClass}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={deliveryDetails.email}
                    onChange={(e) => setDeliveryDetails({ ...deliveryDetails, email: e.target.value })}
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={deliveryDetails.phone}
                    onChange={(e) => setDeliveryDetails({ ...deliveryDetails, phone: e.target.value })}
                    className={inputClass}
                  />
                  <textarea
                    placeholder="Full Address"
                    value={deliveryDetails.address}
                    onChange={(e) => setDeliveryDetails({ ...deliveryDetails, address: e.target.value })}
                    rows={3}
                    className={`${inputClass} resize-none`}
                  />
                </div>
              ) : deliveryComplete ? (
                <div className={`text-sm leading-relaxed text-gray-700 ${cardClass}`}>
                  <p className="font-semibold text-gray-900">{deliveryDetails.name}</p>
                  {deliveryDetails.email && <p>{deliveryDetails.email}</p>}
                  <p>{deliveryDetails.phone}</p>
                  <p className="mt-1">{deliveryDetails.address}</p>
                </div>
              ) : null}
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Delivery Pincode
              </label>
              <input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                className={inputClass}
                placeholder="Enter pincode"
              />
            </div>

            <div className="mb-6 flex items-center justify-between rounded-lg border border-green-200 bg-green-50 p-4">
              <div className="flex items-center gap-3">
                <span className="text-lg text-green-600">✓</span>
                <div>
                  <p className="font-semibold text-green-700">Delhivery</p>
                  <p className="text-xs text-gray-600">Est. delivery by {formattedDate}</p>
                </div>
              </div>
              <span className="font-bold text-green-600">
                {shippingCost === 0 ? "FREE" : formatInr(shippingCost)}
              </span>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <h3 className={sectionTitleClass}>Items in Cart ({totalItems})</h3>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-sm font-semibold text-red-600 hover:text-red-700"
                >
                  Edit cart
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {cart.map((item) => (
                  <div key={item.id} className="relative">
                    <div className="h-16 w-16 overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                      {item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-gray-50 p-6 md:p-8">
            <h2 className="font-poppins mb-6 text-2xl font-bold text-gray-800">Order Summary</h2>

            <h3 className={sectionTitleClass}>Select Payment Mode</h3>
            <div className="mb-6 space-y-3">
              <button
                type="button"
                onClick={() => setPaymentMode("prepaid")}
                className={`flex w-full items-center justify-between rounded-lg border-2 p-4 transition-all ${
                  paymentMode === "prepaid"
                    ? "border-red-600 bg-white shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                      paymentMode === "prepaid" ? "border-red-600" : "border-gray-400"
                    }`}
                  >
                    {paymentMode === "prepaid" && (
                      <span className="h-2 w-2 rounded-full bg-red-600" />
                    )}
                  </span>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-gray-800">Prepaid</p>
                    <p className="text-xs text-gray-500">UPI, cards, net banking</p>
                  </div>
                </div>
                <span className="text-xl" aria-hidden="true">
                  💳
                </span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMode("cod")}
                className={`flex w-full items-center justify-between rounded-lg border-2 p-4 transition-all ${
                  paymentMode === "cod"
                    ? "border-red-600 bg-white shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                      paymentMode === "cod" ? "border-red-600" : "border-gray-400"
                    }`}
                  >
                    {paymentMode === "cod" && <span className="h-2 w-2 rounded-full bg-red-600" />}
                  </span>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-gray-800">Cash on Delivery</p>
                    {!COD_LIVE ? (
                      <span className="mt-1 block text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                        Coming soon
                      </span>
                    ) : (
                      <p className="mt-1 inline-block rounded bg-amber-100 px-2 py-0.5 text-xs text-amber-800">
                        +5% processing fee
                      </p>
                    )}
                  </div>
                </div>
                <span className="text-xl" aria-hidden="true">
                  💰
                </span>
              </button>
            </div>

            {paymentMode === "cod" && !COD_LIVE && (
              <p className="-mt-3 mb-6 text-xs leading-relaxed text-gray-600">
                {CHECKOUT_COMING_SOON_MSG}
              </p>
            )}

            {paymentMode === "prepaid" && (
              <div className="mb-6">
                <h3 className={sectionTitleClass}>Payment Gateway</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentGateway("razorpay")}
                    className={`rounded-lg border-2 p-4 text-center text-sm font-semibold transition-all ${
                      paymentGateway === "razorpay"
                        ? "border-red-600 bg-white shadow-sm"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <span className="block text-gray-800">Razorpay</span>
                    {!ONLINE_PAYMENTS_LIVE && (
                      <span className="mt-2 block text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                        Coming soon
                      </span>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentGateway("icici")}
                    className={`rounded-lg border-2 p-4 text-center text-sm font-semibold transition-all ${
                      paymentGateway === "icici"
                        ? "border-red-600 bg-white shadow-sm"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <span className="block text-gray-800">ICICI Bank</span>
                    {!ONLINE_PAYMENTS_LIVE && (
                      <span className="mt-2 block text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                        Coming soon
                      </span>
                    )}
                  </button>
                </div>
                {!ONLINE_PAYMENTS_LIVE && (
                  <p className="mt-3 text-xs leading-relaxed text-gray-600">
                    {CHECKOUT_COMING_SOON_MSG}
                  </p>
                )}
              </div>
            )}

            <div className="mb-6 space-y-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex justify-between text-sm text-gray-700">
                <span>Subtotal (excl. GST)</span>
                <span className="font-semibold">{formatInr(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-700">
                <span>GST ({GST_PERCENT_LABEL})</span>
                <span className="font-semibold">{formatInr(gstAmount)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-800">
                <span className="font-medium">Cart total (incl. GST)</span>
                <span className="font-semibold">{formatInr(totalWithGst)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-700">
                <span>Shipping</span>
                <span className="font-semibold text-green-600">
                  {shippingCost === 0 ? "FREE" : formatInr(shippingCost)}
                </span>
              </div>
              {codFee > 0 && (
                <div className="flex justify-between text-sm text-amber-700">
                  <span>COD processing fee (5%)</span>
                  <span className="font-semibold">₹{codFee.toLocaleString()}</span>
                </div>
              )}
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <span className="text-lg font-bold text-gray-800">Total</span>
                <span className="text-3xl font-bold text-red-600">
                  {formatInr(youPay)}
                </span>
              </div>
            </div>

            {payError && (
              <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {payError}
              </p>
            )}
            <button
              type="button"
              onClick={handlePayNow}
              disabled={isPaying || !deliveryComplete}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 py-3 text-lg font-bold text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              {isPaying ? "Redirecting to payment…" : "Pay now securely"}
            </button>

            <p className="mt-4 text-center text-xs text-gray-500">
              By placing order, you agree to our{" "}
              <Link
                href="/terms&conditions"
                className="text-red-600 hover:underline"
                onClick={onClose}
              >
                Terms & Conditions
              </Link>
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
