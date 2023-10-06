function addDecimals(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

export function calcPrices(orderItems) {
  // Calculate the items price
  const itemsPrice = orderItems.reduce(
    (acc, item) => acc + item.priceBySize * item.qty,
    0
  );
console.log(itemsPrice)
  // Calculate the shipping price
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  
  // Calculate the tax price
  const taxPrice = 0.15 * itemsPrice;
    console.log(taxPrice)
  // Calculate the total price
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  // return prices as strings fixed to 2 decimal places
  return {
    itemsPrice: addDecimals(itemsPrice),
    shippingPrice: addDecimals(shippingPrice),
    taxPrice: addDecimals(taxPrice),
    totalPrice: addDecimals(totalPrice),
  };
}
