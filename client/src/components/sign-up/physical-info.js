import React from "react";
import "./signup.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";

const PhysicalIinfo = () => {
  const history = useHistory();

  return (
    <div className="flex justify-around main">
      <div className="left-card">
        <div className="flex items-center">
          <div
            onClick={() => history.push("/sign-up/gender")}
            className="cursor-pointer"
          >
            <ArrowBackIcon />
          </div>
          <div className="an-18 gray-text fill-width">Your BMI Calculator</div>
        </div>

        <div className="flex mt15 justify-center gap50">
          <div className="flex flex-col gap50">
            <div className="calculation-box">
              <span className="an-14">Age</span>
              <input className="calculation-input" type="number" />
            </div>
            <div className="calculation-box">
              <span className="an-14">Wright (kg)</span>
              <input className="calculation-input" type="number" />
            </div>
          </div>
          <div>height</div>
        </div>
        <button
          className="nextBtn mt20"
          onClick={(e) => history.push("/sign-up/diet-type")}
        >
          Next
        </button>
      </div>
      <div className="right-card">
        <div className="an-20">Summary</div>
      </div>
    </div>
  );
};

export default PhysicalIinfo;
