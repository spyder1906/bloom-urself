import React, { useState } from "react";
import "./signup.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";

const mealTypeData = [
  {
    name: "Veg",
    img: "../images/veg.webp",
    id: "1",
  },
  {
    name: "Non Veg",
    img: "../images/non_veg.webp",
    id: "2",
  },
  {
    name: "Mixed",
    img: "../images/mixed.webp",
    id: "3",
  },
];

const MealType = () => {
  const [categoryId, setCategoryId] = useState("");
  const history = useHistory();

  const allData = JSON.parse(localStorage.getItem("data")) || {};

  const changeHeight = (+allData.height * 30.48) / 100; //in meter

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
                <img
                  src={data.img}
                  alt="img"
                  className="pt15 pb20 margin-auto"
                  width="62"
                  height="35"
                />
                {data.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="right-card">
        <div className="an-20 uppercase mb20">Summary</div>
        {Object.keys(allData).length > 0 && (
          <div className="text-left">
            <div className="mt10">Age : {allData.age}</div>
            <div className="mt10">Height : {allData.height}</div>
            <div className="mt10">Width : {allData.width}</div>
            <button className="bmiBtn mt20">
              <span>Your BMI:</span>
              <div className="bmibtn-score">
                {(+allData.width / Math.pow(changeHeight, 2)).toFixed(2)}
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealType;
