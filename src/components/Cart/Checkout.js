import styles from './Checkout.module.css';

const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
    <h3>Please enter your information</h3>
    <form onSubmit={confirmHandler} className={styles.form}>
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
      <div className={styles.actions}>
        <button onClick={props.onClose}>Cancel</button>
        <button type='submit' className={styles.submit}>Confirm</button>
      </div>
    </form>
    </>
  );
};

export default Checkout;
