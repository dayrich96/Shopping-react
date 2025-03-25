import React, { useState } from 'react';

function ProduceStore() {
  const [products] = useState([
    { name: 'Banana', price: 0.50 },
    { name: 'Zucchini', price: 2.99 },
    { name: 'Red Bell Pepper', price: 2.69 },
    { name: 'Broccoli', price: 2.99 },
    { name: 'Blueberries', price: 4.49 },
    { name: 'Lime', price: 0.50 },
    { name: 'Strawberries', price: 3.59 },
    { name: 'Tomatoes', price: 2.24 },
    { name: 'Onion', price: 1.69 },
    { name: 'Avocado', price: 1.49 },
    { name: 'Fennel', price: 2.49 },
    { name: 'Mango', price: 1.99 },
    { name: 'Corn', price: 1.99 },
    { name: 'Apple', price: 1.52 },
    { name: 'Lemon', price: 0.89 },
    { name: 'Asparagus', price: 3.49 },
    { name: 'Ginger', price: 3.99 },
    { name: 'Garlic', price: 3.99 },
    { name: 'Potato', price: 0.99 },
    { name: 'Kiwi', price: 0.99 },
  ]);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const itemInCart = cart.find((item) => item.name === product.name);

    if (itemInCart) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    calculateTotal();
  };

  const removeFromCart = (productName) => {
    setCart(cart.filter((item) => item.name !== productName));
    calculateTotal();
  };

  const calculateTotal = () => {
    const newTotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  };

  return (
    <div>
      <h1>Simple Produce Store</h1>
      <div>
        {products.map((product) => (
          <div key={product.name}>
            {product.name} ${product.price}
            <button onClick={() => addToCart(product)}>+</button>
          </div>
        ))}
      </div>
      <div>
        <h2>Shopping Cart:</h2>
        {cart.map((item) => (
          <div key={item.name}>
            {item.name} ${item.price} x {item.quantity} = $
            {(item.price * item.quantity).toFixed(2)}
            <button onClick={() => removeFromCart(item.name)}>x</button>
          </div>
        ))}
      </div>
      <div>
        <strong>Total:</strong> ${total.toFixed(2)}
      </div>
    </div>
  );
}

export default ProduceStore;

