import mealsImage from '../../assets/meals.jpg';
import styles from './Header.module.css';

const Header = props => {
    return <>
        <header>
            <h1>React Meals By Oksana</h1>
            <button>Cart</button>
        </header>
        <div className={styles['main-image'] }>
            <img src={mealsImage} alt="meals" />
        </div>
    </>
};

export default Header;