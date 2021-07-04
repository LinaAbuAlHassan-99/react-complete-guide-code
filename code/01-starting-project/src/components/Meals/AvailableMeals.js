import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";
/*
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];
*/
const AvailableMeals = () => {
  const [meals, setMeals] = useState([]); // update where the data change so i need state // initialy is empty
  // Loading the data state
  const [isLoading, setIsLoading] = useState(false); // initialy we dont load
  // Handel error
  const [httpError, setHttpError] = useState(); // intitial state undefind or set it to null
  //fetch data
  useEffect(
    // the function i passed shult not return promise can return clean up so i create new function
    //async()=>{
    () => {
      const fechMeals = async () => {
        // here i start load data so i change it to true
        setIsLoading(true);
        const responce = await fetch(
          "https://react-http-6b4a6.firebaseio.com/meals.json"
        );

        if (!responce.ok) {
          throw new Error("Some thing went Wrong"); // any line after it will not run if error
        }
        const responseData = await responce.Json();

        //utilize resopnse data
        // ineed array not obj

        const loadedMeals = [];
        for (const key in responseData) {
          // here i transform the fetch data
          loadedMeals.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }

        setMeals(loadedMeals);
      };
      /*
      // here i call the func that have error so i wrpe it by try and catch
      try {
        // but await cant use here becuse seteffect return project so eather i wpaoe it by fun like fetchdata or use promed way
        await fechMeals(); // async function if we throw an error inside it will reject so i need awit
      } catch (error) {
        setIsLoading(false);
        setHttpError(error.message);
      }

      */
      // promise way
      fechMeals().catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
      //done loading
      setIsLoading(false);
    },
    []
  ); // no dependancy so only run when the comp first loaded and ..
  // here this is since becuse we don't change data or we don't have props

  // if loading the data i just want to showing this loading ...
  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading ...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
