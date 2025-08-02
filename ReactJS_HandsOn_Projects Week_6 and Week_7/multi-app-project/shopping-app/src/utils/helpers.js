function calculateTotal(items) {
  return items.reduce((total, item) => total + item.price, 0);
}

function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

export { calculateTotal, formatCurrency };