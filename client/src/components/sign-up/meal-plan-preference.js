import React, { useState } from "react";
import "./signup.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";

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
    name: "Egg",
    id: "3",
  },
];

const MealPlanPreference = () => {
  const [categoryId, setCategoryId] = useState("");
  const history = useHistory();

  return (
    <div>
      <div className="flex items-center">
        <div
          onClick={() => history.push("/sign-up/meal-type")}
          className="cursor-pointer"
        >
          <ArrowBackIcon />
        </div>
        <div className="an-18 gray-text fill-width">
          Meal and Plan Preference
        </div>
      </div>
      <p className="an-16 gray-text mt10">Choose Your plan</p>
    </div>
  );
};

export default MealPlanPreference;
