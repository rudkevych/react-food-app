import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const cartContext = useContext(CartContext);
  const addItemToCart = (amount) => {
    const item = {
      ...props,
      amount,
    };
    cartContext.addItem(item);
  };
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addItemToCart} />
      </div>
    </li>
  );
};

export default MealItem;
