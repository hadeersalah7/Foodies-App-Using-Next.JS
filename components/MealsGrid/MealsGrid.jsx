import React from "react";
import MealsItem from "../MealsItem/MealsItem";

const MealsGrid = ({ meals }) => {
  return (
    <ul>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealsItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
