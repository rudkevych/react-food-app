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
    name: true,
    address: true,
    postal: true,
    city: true,
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const confirmHandler = (event) => {
    event.preventDefault();

    //TODO: validation refactoring
    const name = nameInput.current.value;
    const address = addressInput.current.value;
    const postal = postalInput.current.value;
    const city = cityInput.current.value;

    const nameIsValid = !isEmpty(name);
    const addressIsValid = !isEmpty(address);
    const cityIsValid = !isEmpty(city);
    const postalIsValid = isFiveChars(postal);

    const formValidation =
      nameIsValid && cityIsValid && addressIsValid && postalIsValid;

    setFormIsValid(formValidation);

    setFormControlIsValid({
      name: nameIsValid,
      address: addressIsValid,
      city: cityIsValid,
      postal: postalIsValid,
    });

    console.log(formControlIsValid);

    if (formIsValid) {
      props.onConfirm({
        name,
        address,
        postal,
        city,
      });
    }
  };

  //TODO: create separate control component
  return (
    <>
      <h3>Please enter your information</h3>
      <form onSubmit={confirmHandler} className={styles.form}>
        <div
          className={`${styles.control} ${
            formControlIsValid.name ? '' : styles.invalid
          }`}
        >
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' ref={nameInput} />
          {!formControlIsValid.name && <p>Please enter valid name</p>}
        </div>
        <div
          className={`${styles.control} ${
            formControlIsValid.address ? '' : styles.invalid
          }`}
        >
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' ref={addressInput} />
          {!formControlIsValid.address && <p>Please enter valid address</p>}
        </div>
        <div
          className={`${styles.control} ${
            formControlIsValid.postal ? '' : styles.invalid
          }`}
        >
          <label htmlFor='postal'>Postal Code</label>
          <input type='text' id='postal' ref={postalInput} />
          {!formControlIsValid.postal && (
            <p>Please enter valid postal code. It should be 5 digits</p>
          )}
        </div>
        <div
          className={`${styles.control} ${
            formControlIsValid.city ? '' : styles.invalid
          }`}
        >
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
