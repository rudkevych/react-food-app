import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
  const [orderIsActive, setOrderIsActive] = useState(false);
  const cartContext = useContext(CartContext);

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const addCartItemHandler = (item) => {
    cartContext.addItem(item, 1);
  };

  const orderHandler = () => {
    setOrderIsActive((prev) => !prev);
  };

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartContext.items.map((item) => (
        <CartItem
          price={item.price}
          amount={item.amount}
          name={item.name}
          key={item.id}
          onRemove={removeCartItemHandler.bind(null, item.id)}
          onAdd={addCartItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  let modalActions = (
    <div className={styles.actions}>
      <button className={styles['button--alt']} onClick={props.onCartClose}>
        Close
      </button>
      {cartContext.items.length > 0 && (
        <button className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  if (orderIsActive) {
    modalActions = <Checkout onClose={props.onCartClose}/>;
  }

  return (
    <Modal onClose={props.onCartClose}>
      {cartItems}

      <div className={styles.total}>
        {!cartContext.items.length && <span>Cart is empty :(</span>}
        <span>Total Amount</span>
        <span>$ {cartContext.totalAmount.toFixed(2)}</span>
      </div>
      {modalActions}
    </Modal>
  );
};

export default Cart;
