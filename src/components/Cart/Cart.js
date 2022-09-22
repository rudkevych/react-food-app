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
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>$50</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
