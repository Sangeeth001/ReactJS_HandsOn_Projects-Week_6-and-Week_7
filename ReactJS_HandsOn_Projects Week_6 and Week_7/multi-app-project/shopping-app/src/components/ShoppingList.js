class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, name: 'Apple', price: 1.00 },
        { id: 2, name: 'Banana', price: 0.50 },
        { id: 3, name: 'Orange', price: 0.75 },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {this.state.items.map(item => (
            <Cart key={item.id} name={item.name} price={item.price} />
          ))}
        </ul>
      </div>
    );
  }
}

const Cart = ({ name, price }) => (
  <li>
    {name}: ${price.toFixed(2)}
  </li>
);

export default ShoppingList;