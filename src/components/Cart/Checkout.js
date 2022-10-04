import styles from './Checkout.module.css';

const Checkout = props => {
  return (
    <form>
      <div className={styles.control}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' />
      </div>
      <div className={styles.control}>
        <label htmlFor='address'>Address</label>
        <input type='text' id='address' />
      </div>
      <div className={styles.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' />
      </div>
      <div className={styles.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' />
      </div>
      <button onClick={props.onClose}>Cancel</button>
      <button type='submit'>Confirm</button>
    </form>
  );
};

export default Checkout;
