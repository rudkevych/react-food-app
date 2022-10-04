import { useState } from 'react';
import { useEffect } from 'react';
import Card from '../UI/Card';
import styles from './AvailableMeals.module.css';
import MealItem from './MealItem';

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMeals() {
      setIsLoading(true);

      const response = await fetch(
        'https://react-food-app-62239-default-rtdb.firebaseio.com/meals.json'
      );
      const responseData = await response.json();
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          ...responseData[key],
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    }

    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={styles.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className={styles.meals}>
      <ul>
        {meals.map((meal) => (
          <Card key={meal.id}>
            <MealItem
              name={meal.name}
              price={meal.price}
              id={meal.id}
              description={meal.description}
              key={meal.id}
            />
          </Card>
        ))}
      </ul>
    </section>
  );
};

export default AvailableMeals;
