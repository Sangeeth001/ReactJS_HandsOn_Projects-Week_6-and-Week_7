function formatRentData(rentData) {
  return rentData.map(item => ({
    id: item.id,
    address: item.address,
    rent: `$${item.rent.toFixed(2)}`,
  }));
}

function filterAffordableRentals(rentals, maxRent) {
  return rentals.filter(rental => rental.rent <= maxRent);
}

export { formatRentData, filterAffordableRentals };