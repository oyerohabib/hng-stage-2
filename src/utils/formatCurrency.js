// Utility function to format price to Nigerian Naira (NGN) currency format
export const formatPrice = (price) => {
  // Convert price to number and handle edge case for empty price
  const numericPrice = parseFloat(price) || 0;

  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(numericPrice);

  return formattedPrice;
};
