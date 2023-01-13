import React, { useState } from "react";
import "./signup.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";

const Gender = () => {
  const [categoryId, setCategoryId] = useState("");
  const history = useHistory();

  return (
    <div className="flex justify-around main">
      <div className="left-card">
        <div className="flex items-center">
          <div onClick={() => history.push("/sign-up/goal")} className="cursor-pointer">
            <ArrowBackIcon />
          </div>
          <div className="an-18 gray-text fill-width">
            Please select your gender
          </div>
        </div>
        <div className="flex justify-around items-center mt50">
          <div
            onClick={() => {
              setCategoryId("0");
              setTimeout(() => {
                history.push("/sign-up/physical-info");
              }, 500);
            }}
            className={categoryId === "0" ? "genderImgSelect" : ""}
          >
            <img
              src="../images/female.svg"
              alt="female"
              className="genderImg"
            />
          </div>
          <div
            onClick={() => {
              setCategoryId("1");
              setTimeout(() => {
                history.push("/sign-up/physical-info");
              }, 500);
            }}
            className={categoryId === "1" ? "genderImgSelect" : ""}
          >
            <img src="../images/male.svg" alt="male" className="genderImg" />
          </div>
        </div>
      </div>
      <div className="right-card">
        <div className="an-20">Summary</div>
      </div>
    </div>
  );
};

export default Gender;