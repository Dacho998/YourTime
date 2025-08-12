import React from 'react';
import { useCart } from '../../context/CartContext';
import "./Cart.css";

const formatPriceMKD = (price: number) => {
  return price.toFixed(3).replace('.', ',');
}

const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <p className="empty-cart-msg">Your cart is empty.</p>;
  }

  const totalPrice = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  return (
    <div className="cart-container">
      <h2>Your cart</h2>
      <ul className="cart-list">
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-item-img" />
            <span>
              {item.name} - {formatPriceMKD(item.price)} МКД x {item.quantity || 1}
            </span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <div className="cart-total">
        <strong>Вкупно:</strong> {formatPriceMKD(totalPrice)} МКД
      </div>

      <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
