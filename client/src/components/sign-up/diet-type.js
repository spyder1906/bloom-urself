import React, { useState } from "react";
import "./signup.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";

const dietTypeData = [
  {
    name: "Let the nutritionist decide",
    id: "1",
  },
  {
    name: "Ketogenic",
    id: "2",
  },
  {
    name: "Balanced",
    id: "3",
  },
  {
    name: "Vegan",
    id: "4",
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
          <div className="an-18 gray-text fill-width">
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
              {data.name}
            </div>
          );
        })}
      </div>
      <div className="right-card">
        <div className="an-20">Summary</div>
        {Object.keys(allData).length > 0 && (
          <>
            <div>Age : {allData.age}</div>
            <div>Height : {allData.height}</div>
            <div>Width : {allData.width}</div>
            <div>
              Total : {(+allData.width / Math.pow(changeHeight, 2)).toFixed(2)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DietType;
