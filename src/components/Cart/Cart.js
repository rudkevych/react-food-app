import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
  const [orderIsActive, setOrderIsActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch('https://react-food-app-62239-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        order: cartContext.items
      })
    });
    setIsSubmitting(false);
    setIsSubmitted(true);
    cartContext.removeAllItems();
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
    modalActions = (
      <Checkout onConfirm={submitOrderHandler} onClose={props.onCartClose} />
    );
  }

  const cartModalContent = <>
      {cartItems}
      <div className={styles.total}>
        {!cartContext.items.length && <span>Cart is empty :(</span>}
        <span>Total Amount</span>
        <span>$ {cartContext.totalAmount.toFixed(2)}</span>
      </div>
      {modalActions}
  </>

  const isSubmittingContent = <p>Sending order data....</p>
  const submittedContent = <p>Order is sent successfully. Yay!</p>

  return (
    <Modal onClose={props.onCartClose}>
      {!isSubmitting && !isSubmitted && cartModalContent}
      {isSubmitting && isSubmittingContent}
      {!isSubmitting && isSubmitted && submittedContent}
    </Modal>
  );
};

export default Cart;
