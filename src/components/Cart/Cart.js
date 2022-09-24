import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartContext.items.map((item) => (
        <li key={item.id}>
          {item.name} amount {item.amount}
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onCartClose}>
      {cartItems}

      <div className={styles.total}>
        {!cartContext.items.length && <span>Cart is empty :(</span>}
        <span>Total Amount</span>
        <span>$ {cartContext.totalAmount.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onCartClose}>
          Close
        </button>
        {cartContext.items.length > 0 && (
          <button className={styles.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
