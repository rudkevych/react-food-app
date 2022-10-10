import { useRef, useState } from 'react';
import styles from './Checkout.module.css';

const isEmpty = (value) => !value.trim().length;
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const nameInput = useRef();
  const addressInput = useRef();
  const postalInput = useRef();
  const cityInput = useRef();

  const [formControlIsValid, setFormControlIsValid] = useState({
    name: false,
    address: false,
    postal: false,
    city: false,
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const confirmHandler = (event) => {
    event.preventDefault();

    const nameValue = nameInput.current.value;
    const addressValue = addressInput.current.value;
    const postalValue = postalInput.current.value;
    const cityValue = cityInput.current.value;

    const nameIsValid = !isEmpty(nameValue);
    const addressIsValid = !isEmpty(addressValue);
    const cityIsValid = !isEmpty(cityValue);
    const postalIsValid = isFiveChars(postalValue);
    
    setFormControlIsValid({
      name: nameIsValid,
      address: addressIsValid,
      city: cityIsValid,
      postal: postalIsValid,
    });

  };

  
  //TODO: create separate control component
  return (
    <>
      <h3>Please enter your information</h3>
      <form onSubmit={confirmHandler} className={styles.form}>
        <div className={`${styles.control} ${formControlIsValid.name ? '' : styles.invalid }`}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' ref={nameInput} />
          {!formControlIsValid.name && <p>Please enter valid name</p>}
        </div>
        <div className={`${styles.control} ${formControlIsValid.street ? '' : styles.invalid }`}>
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' ref={addressInput} />
          {!formControlIsValid.address && <p>Please enter valid address</p>}
        </div>
        <div className={`${styles.control} ${formControlIsValid.postal ? '' : styles.invalid }`}>
          <label htmlFor='postal'>Postal Code</label>
          <input type='text' id='postal' ref={postalInput} />
          {!formControlIsValid.postal && <p>Please enter valid postal code. It should be 5 digits</p>}
        </div>
        <div className={`${styles.control} ${formControlIsValid.city ? '' : styles.invalid }`}>
          <label htmlFor='city'>City</label>
          <input type='text' id='city' ref={cityInput} />
          {!formControlIsValid.city && <p>Please enter valid address</p>}
        </div>
        <div className={styles.actions}>
          <button onClick={props.onClose}>Cancel</button>
          <button type='submit' className={styles.submit}>
            Confirm
          </button>
        </div>
      </form>
    </>
  );
};

export default Checkout;
