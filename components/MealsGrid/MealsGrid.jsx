import React from "react";
import MealsItem from "../MealsItem/MealsItem";
import classes from "./meals-grid.module.css"
const MealsGrid = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealsItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
