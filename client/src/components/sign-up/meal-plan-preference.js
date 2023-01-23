import React, { useState } from "react";
import "./signup.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";
import MealCard from "./meal-card";

const mealTypeData = [
  {
    name: "Veg",
    id: "1",
  },
  {
    name: "Non Veg",
    id: "2",
  },
  {
    name: "Mixed",
    id: "3",
  },
];

const MealPlanPreference = () => {
  const [categoryId, setCategoryId] = useState("");
  const history = useHistory();

  return (
    <div className="pa50 text-center">
      <div className="flex items-center">
        <div
          onClick={() => history.push("/sign-up/meal-type")}
          className="cursor-pointer"
        >
          <ArrowBackIcon />
        </div>
        <div className="an-28 semi-bold-text fill-width">
          Meal and Plan Preference
        </div>
      </div>
      <p className="an-20 regular-text mt20">Choose Your plan</p>
      <div className="flex items-center flex-wrap mt30">
        <MealCard price={350} type={"TRIAL"} lunchName="Breakfast" />
        <MealCard price={350} type={"15 DAYS"} lunchName="Lunch" />
        <MealCard price={350} type={"30 DAYS"} discount={10} lunchName="Dinner" />
        <MealCard price={350} type={"60 DAYS"} discount={15} />
      </div>
    </div>
  );
};

export default MealPlanPreference;
