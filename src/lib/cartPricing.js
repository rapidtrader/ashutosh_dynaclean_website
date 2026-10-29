/** Cart prices are ex-GST; GST is added at summary / checkout */
export const GST_RATE = 0.18;
export const GST_PERCENT_LABEL = "18%";

export function calculateGst(subtotal) {
  const base = Math.round(Number(subtotal) || 0);
  const gstAmount = Math.round(base * GST_RATE);
  const totalWithGst = base + gstAmount;
  return { subtotal: base, gstAmount, totalWithGst };
}

export function formatInr(amount) {
  return `₹${Math.round(amount).toLocaleString("en-IN")}`;
}
