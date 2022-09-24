import { useRef, useState } from 'react';
import Input from '../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const amount = amountInputRef.current.value;
    if (!amount.trim().length || amount <= 0) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(+amount);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '10',
          step: '1',
        }}
      />
      <button type='submit'>+ Add</button>
      {!amountIsValid && <p>Amount value is not valid</p>}
    </form>
  );
};

export default MealItemForm;
