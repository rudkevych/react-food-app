import mealsImage from '../../assets/meals.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
     <HeaderCartButton />
      <header className={styles.header}>
        <h1>React Meals By Oksana</h1>
        <p>hello</p>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt='meals' />
      </div>
    </>
  );
};

export default Header;
