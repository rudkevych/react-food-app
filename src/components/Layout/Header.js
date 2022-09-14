import mealsImage from '../../assets/meals.jpg';

const Header = props => {
    return <>
        <header>
            <h1>React Meals By Oksana</h1>
            <button>Cart</button>
        </header>
        <div>
            <img src={mealsImage} alt="meals" />
        </div>
    </>
};

export default Header;