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

const MealType = () => {
  const [categoryId, setCategoryId] = useState("");
  const history = useHistory();

  return (
    <div className="flex justify-around main">
      <div className="left-card">
        <div className="flex items-center">
          <div
            onClick={() => history.push("/sign-up/physical-info")}
            className="cursor-pointer"
          >
            <ArrowBackIcon />
          </div>
          <div className="an-18 gray-text fill-width">Choose your Meal</div>
        </div>
        <p className="an-16 gray-text mt10">Please select one</p>
        <div className="meal-type-cards">
          {mealTypeData.map((data, index) => {
            return (
              <div
                className="goal-card an-14 gray-text uppercase"
                key={index}
                onClick={() => {
                  setCategoryId(data.id);
                  setTimeout(() => {
                    history.push("/sign-up/meal-plan-preference");
                  }, 500);
                }}
                style={{
                  backgroundColor: categoryId === data.id ? "#fbd40a" : "#fff",
                }}
              >
                {data.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="right-card">
        <div className="an-20">Summary</div>
      </div>
    </div>
  );
};

export default MealType;
