import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./signup.css";

const yourGoalData = [
  {
    name: "Lose Weight",
    id: "1",
  },
  {
    name: "Healthy Eating",
    id: "2",
  },
  {
    name: "Gain Muscle",
    id: "3",
  },
];

const Goal = () => {
  const [categoryId, setCategoryId] = useState("");
  const history = useHistory();

  return (
    <div className="flex justify-around main">
      <div className="left-card">
        <div className="an-24 medium-text">How it works?</div>
        <p className="an-16 gray-text mt10">
          This is what we do to ensure you lose weight
        </p>
        <div className="an-24 medium-text mt20">Your Goal</div>
        <p className="an-16 gray-text mt10">Please select one</p>
        <div className="mt20 flex">
          {yourGoalData.map((data, index) => {
            return (
              <div
                className="goal-card"
                key={index}
                onClick={() => {
                  setCategoryId(data.id);
                  setTimeout(() => {   
                    history.push("/sign-up/gender");
                  }, 500);
                }}
                style={{
                  backgroundColor: categoryId === data.id ? "#fbd40a" : "#fff",
                }}
              >
                <span className="an-10 pt10">{data.name}</span>
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

export default Goal;

// #fbd40a
