import { useCart } from '../../context/CartContext';
import watchBox from '../../assets/cart/WatchBox.png';
import CartItem from './CartItem';
import './css/Cart.css';
import "./css/CartResponsive.css"

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <img src={watchBox} alt="Empty cart" />
        <p className="empty-cart-msg">Your watch box is empty.</p>
      </div>
    );
  }

  const totalPrice = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  return (
    <div className="cart-container">
      <h2>Your cart</h2>
      <ul className="cart-list">
        {cart.map(item => (
          <CartItem key={item.id} item={item} remove={removeFromCart} />
        ))}
      </ul>

      <div className="cart-total">
        <strong>Вкупно:</strong> {totalPrice.toFixed(3).replace('.', ',')} МКД
      </div>

      <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
    </div>
  );
}
