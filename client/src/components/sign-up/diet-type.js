import React, { useState } from "react";
import "./signup.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";

const dietTypeData = [
  {
    name: "Athlete meal",
    img: "../images/diet_type1.svg",
    id: "1",
  },
  {
    name: "Diet meal",
    img: "../images/diet_type2.svg",
    id: "2",
  },
  {
    name: "Customised meal",
    img: "../images/diet_type3.svg",
    id: "3",
  },
];

const DietType = () => {
  const [categoryId, setCategoryId] = useState("");
  const history = useHistory();

  const allData = JSON.parse(localStorage.getItem("data")) || {};

  const changeHeight = (+allData.height * 30.48) / 100; //in meter

  return (
    <div className="flex justify-around main">
      <div className="left-card">
        <div className="flex items-center mb15">
          <div
            onClick={() => history.push("/sign-up/physical-info")}
            className="cursor-pointer"
          >
            <ArrowBackIcon />
          </div>
          <div className="an-18 gray-text fill-width mb20">
            Choose your Diet Type
          </div>
        </div>
        {dietTypeData.map((data, index) => {
          return (
            <div
              className="diet-card an-18 semi-bold-text"
              key={index}
              onClick={() => {
                setCategoryId(data.id);
                setTimeout(() => {
                  history.push("/sign-up/meal-type");
                }, 500);
              }}
              style={{
                backgroundColor: categoryId === data.id ? "#fbd40a" : "#fff",
              }}
            >
              <img src={data.img} alt="img" className="ml10 mr20" />
              {data.name}
            </div>
          );
        })}
      </div>
      <div className="right-card">
        <div className="an-20">Summary</div>
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

export default DietType;
