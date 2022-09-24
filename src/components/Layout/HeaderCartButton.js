import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const cartContext = useContext(CartContext);
  const cartItemsAmount = cartContext.items.reduce((pv, item) => {
    return pv + item.amount;
  }, 0);

  const buttonClasses = `${styles.button} ${
    buttonIsHighlighted ? styles.bump : ''
  }`;
  useEffect(() => {
    if (!cartContext.items.length) return;
    setButtonIsHighlighted(true);
    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{cartItemsAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
