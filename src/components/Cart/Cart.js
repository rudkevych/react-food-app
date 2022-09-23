import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = (props) => {
  //TODO: change to real selected elements
  const selectedItems = [
    { id: 'c1', name: 'Sushi' },
    { id: 'c2', name: 'Pasta' },
  ];
  const cartItems = (
    <ul className={styles['cart-items']}>
      {selectedItems.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onCartClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>$50</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onCartClose}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
