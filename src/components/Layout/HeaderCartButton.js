import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const cartItemsAmount = cartContext.items.reduce((pv, item) => {
    return pv + item.amount;
  }, 0);
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{cartItemsAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
