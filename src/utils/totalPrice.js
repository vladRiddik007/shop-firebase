export const totalPrice = (arr) => {
  const newPrice = arr.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );
  return newPrice;
};
