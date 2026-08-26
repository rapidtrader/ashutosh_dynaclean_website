"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SURFACE_SHIPPING = 165;
const AIR_SHIPPING = 265;

export default function CheckoutModal({ isOpen, onClose, cart, cartTotal }) {
  const [shippingMode, setShippingMode] = useState("surface");
  const [secureShipment, setSecureShipment] = useState(false);
  const [paymentMode, setPaymentMode] = useState("prepaid");
  const [paymentGateway, setPaymentGateway] = useState("icici");
  const [couponCode, setCouponCode] = useState("");
  const [pincode, setPincode] = useState("201201");
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const shippingCost = shippingMode === "surface" ? SURFACE_SHIPPING : AIR_SHIPPING;
  const codFee = paymentMode === "cod" ? Math.round(cartTotal * 0.05) : 0;
  const insuranceCost = secureShipment ? 0 : 0;
  const youPay = cartTotal + shippingCost + codFee + insuranceCost;

  const totalItems = cart.reduce((count, item) => count + item.quantity, 0);

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + (shippingMode === "surface" ? 3 : 1));
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

  if (!isOpen) return null;

  const handlePayNow = () => {
    if (!deliveryDetails.name || !deliveryDetails.phone || !deliveryDetails.address) {
      alert("Please fill in your delivery details before proceeding.");
      setIsEditingAddress(true);
      return;
    }
    alert("Payment gateway integration coming soon. Our team will contact you shortly.");
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-6xl max-h-[95vh] overflow-y-auto rounded-2xl bg-[#141414] text-white shadow-2xl border border-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Column */}
          <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close checkout"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Step 2 of 2</p>
                <h2 className="text-xl font-bold tracking-wide">Payment & Offers</h2>
              </div>
            </div>

            {/* Delivery Details */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Delivery Details
                </h3>
                <button
                  onClick={() => setIsEditingAddress(!isEditingAddress)}
                  className="text-red-500 text-xs font-semibold hover:text-red-400"
                >
                  {isEditingAddress ? "SAVE" : "EDIT"}
                </button>
              </div>

              {isEditingAddress ? (
                <div className="space-y-3 bg-[#1e1e1e] rounded-xl p-4 border border-gray-800">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={deliveryDetails.name}
                    onChange={(e) => setDeliveryDetails({ ...deliveryDetails, name: e.target.value })}
                    className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={deliveryDetails.email}
                    onChange={(e) => setDeliveryDetails({ ...deliveryDetails, email: e.target.value })}
                    className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={deliveryDetails.phone}
                    onChange={(e) => setDeliveryDetails({ ...deliveryDetails, phone: e.target.value })}
                    className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                  />
                  <textarea
                    placeholder="Full Address"
                    value={deliveryDetails.address}
                    onChange={(e) => setDeliveryDetails({ ...deliveryDetails, address: e.target.value })}
                    rows={3}
                    className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 resize-none"
                  />
                </div>
              ) : (
                <div className="bg-[#1e1e1e] rounded-xl p-4 border border-gray-800 text-sm text-gray-300 leading-relaxed">
                  {deliveryDetails.name || deliveryDetails.phone || deliveryDetails.address ? (
                    <>
                      <p className="font-semibold text-white">{deliveryDetails.name}</p>
                      {deliveryDetails.email && <p>{deliveryDetails.email}</p>}
                      {deliveryDetails.phone && <p>{deliveryDetails.phone}</p>}
                      {deliveryDetails.address && <p className="mt-1">{deliveryDetails.address}</p>}
                    </>
                  ) : (
                    <p className="text-gray-500">Click EDIT to add your delivery details</p>
                  )}
                </div>
              )}
            </div>

            {/* Pincode */}
            <div className="mb-6">
              <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 block">
                Delivery Pincode
              </label>
              <input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                className="w-full bg-[#1e1e1e] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500"
                placeholder="Enter pincode"
              />
            </div>

            {/* Shipping Mode */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => setShippingMode("surface")}
                className={`rounded-xl p-4 border-2 text-left transition-all ${
                  shippingMode === "surface"
                    ? "border-red-500 bg-red-500/10"
                    : "border-gray-700 bg-[#1e1e1e] hover:border-gray-600"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🚚</span>
                  <span className="font-bold text-sm">SURFACE</span>
                </div>
                <p className="text-xs text-gray-400">FROM ₹{SURFACE_SHIPPING}</p>
              </button>
              <button
                onClick={() => setShippingMode("air")}
                className={`rounded-xl p-4 border-2 text-left transition-all ${
                  shippingMode === "air"
                    ? "border-red-500 bg-red-500/10"
                    : "border-gray-700 bg-[#1e1e1e] hover:border-gray-600"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">✈️</span>
                  <span className="font-bold text-sm">AIR</span>
                </div>
                <p className="text-xs text-gray-400">FROM ₹{AIR_SHIPPING}</p>
              </button>
            </div>

            {/* Secure Shipment */}
            <div className="flex items-center justify-between bg-[#1e1e1e] rounded-xl p-4 border border-gray-800 mb-4">
              <div>
                <p className="font-semibold text-sm">Secure Shipment</p>
                <p className="text-xs text-gray-400">100% In-transit Insured + ₹0</p>
              </div>
              <button
                onClick={() => setSecureShipment(!secureShipment)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  secureShipment ? "bg-green-500" : "bg-gray-600"
                }`}
                aria-label="Toggle secure shipment"
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    secureShipment ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>

            {/* Carrier */}
            <div className="flex items-center justify-between bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <div>
                  <p className="font-semibold text-green-400">Delhivery</p>
                  <p className="text-xs text-gray-400">{formattedDate}</p>
                </div>
              </div>
              <span className="font-bold text-green-400">₹{shippingCost}</span>
            </div>

            {/* Cart Items */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Items in Cart ({totalItems})
                </h3>
                <button onClick={onClose} className="text-red-500 text-xs font-semibold hover:text-red-400">
                  EDIT CART
                </button>
              </div>
              <div className="flex gap-3 flex-wrap">
                {cart.map((item) => (
                  <div key={item.id} className="relative">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="p-6 md:p-8">
            {/* Payment Mode */}
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Select Payment Mode
            </h3>
            <div className="space-y-3 mb-6">
              <button
                onClick={() => setPaymentMode("prepaid")}
                className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                  paymentMode === "prepaid"
                    ? "border-green-500 bg-green-500/10"
                    : "border-gray-700 bg-[#1e1e1e] hover:border-gray-600"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      paymentMode === "prepaid" ? "border-green-500" : "border-gray-500"
                    }`}
                  >
                    {paymentMode === "prepaid" && (
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                    )}
                  </span>
                  <div className="text-left">
                    <p className="font-semibold text-sm">Prepaid</p>
                    <p className="text-xs text-gray-400">(UPI, Cards, NetBanking)</p>
                  </div>
                </div>
                <span className="text-xl">💳</span>
              </button>

              <button
                onClick={() => setPaymentMode("cod")}
                className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                  paymentMode === "cod"
                    ? "border-yellow-500 bg-yellow-500/10"
                    : "border-gray-700 bg-[#1e1e1e] hover:border-gray-600"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      paymentMode === "cod" ? "border-yellow-500" : "border-gray-500"
                    }`}
                  >
                    {paymentMode === "cod" && (
                      <span className="w-2 h-2 rounded-full bg-yellow-500" />
                    )}
                  </span>
                  <div className="text-left">
                    <p className="font-semibold text-sm">Cash on Delivery</p>
                    <p className="text-xs text-yellow-500 bg-yellow-500/20 inline-block px-2 py-0.5 rounded mt-1">
                      +5% Processing Fee
                    </p>
                  </div>
                </div>
                <span className="text-xl">💰</span>
              </button>
            </div>

            {/* Payment Gateway */}
            {paymentMode === "prepaid" && (
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="text-red-500">🏦</span> Payment Gateway
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPaymentGateway("razorpay")}
                    className={`p-4 rounded-xl border-2 text-center font-semibold text-sm transition-all ${
                      paymentGateway === "razorpay"
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-gray-700 bg-[#1e1e1e] hover:border-gray-600"
                    }`}
                  >
                    Razorpay
                  </button>
                  <button
                    onClick={() => setPaymentGateway("icici")}
                    className={`p-4 rounded-xl border-2 text-center font-semibold text-sm transition-all ${
                      paymentGateway === "icici"
                        ? "border-orange-500 bg-orange-500/10"
                        : "border-gray-700 bg-[#1e1e1e] hover:border-gray-600"
                    }`}
                  >
                    ICICI Bank
                  </button>
                </div>
              </div>
            )}

            {/* Offers */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                  <span>🏷️</span> Offers & Discounts
                </h3>
                <button className="text-red-500 text-xs font-semibold hover:text-red-400">
                  VIEW ALL COUPONS
                </button>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter Code"
                  className="flex-1 bg-[#1e1e1e] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                />
                <button className="bg-[#2a2a2a] border border-gray-700 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-[#333] transition-colors">
                  APPLY
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-3 mb-6 pt-4 border-t border-gray-800">
              <div className="flex justify-between text-sm text-gray-400">
                <span>Cart Total</span>
                <span>₹{cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Shipping (Delhivery)</span>
                <span>₹{shippingCost}</span>
              </div>
              {codFee > 0 && (
                <div className="flex justify-between text-sm text-yellow-500">
                  <span>COD Processing Fee (5%)</span>
                  <span>₹{codFee.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between items-center pt-3 border-t border-gray-800">
                <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  You Pay
                </span>
                <span className="text-3xl font-bold text-white">
                  ₹{youPay.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Pay Button */}
            <button
              onClick={handlePayNow}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-red-600/30"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              PAY NOW SECURELY
            </button>

            <p className="text-center text-xs text-gray-500 mt-4">
              By placing order, you agree to our{" "}
              <Link href="/terms&conditions" className="text-red-500 hover:underline" onClick={onClose}>
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
