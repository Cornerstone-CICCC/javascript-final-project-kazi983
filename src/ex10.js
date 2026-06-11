/**
 * Create a summary of shopping cart items.
 * @param {{name: string, price: number, quantity: number}[]} items
 * @returns {{itemCount: number, totalQuantity: number, totalPrice: number}}
 */
function createCartSummary(items) {
  if (!items) throw new Error('Cart cannot be undefined');

  if (!Array.isArray(items)) throw new Error('Cart must be an array');

  if (items.some(({ name, price, quantity }) => !name || !price || !quantity))
    throw new Error('Each item must have a name, price, and quantity');

  if (
    items.some(
      ({ price, quantity }) =>
        typeof price !== 'number' || typeof quantity !== 'number',
    )
  )
    throw new Error('Price and quantity must be numbers');

  if (items.some(({ price, quantity }) => price < 0 || quantity < 0))
    throw new Error('Price and quantity cannot be negative');

  return {
    itemCount: items.length,
    totalQuantity: items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: items.reduce((total, item) => total + item.price * item.quantity, 0),
  };
}

module.exports = createCartSummary;
