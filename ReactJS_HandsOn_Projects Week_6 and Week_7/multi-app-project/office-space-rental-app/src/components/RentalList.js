function RentalList() {
  const rentals = [
    { id: 1, address: '123 Main St', rent: '$1200/month' },
    { id: 2, address: '456 Elm St', rent: '$1500/month' },
    { id: 3, address: '789 Oak St', rent: '$1800/month' },
  ];

  return (
    <div>
      <h2>Available Office Spaces</h2>
      <ul>
        {rentals.map(rental => (
          <li key={rental.id}>
            {rental.address} - {rental.rent}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RentalList;