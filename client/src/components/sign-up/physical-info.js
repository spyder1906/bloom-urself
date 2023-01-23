import React, { useState, useEffect } from "react";
import "./signup.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";

const PhysicalIinfo = () => {
  const history = useHistory();
  const [data, setData] = useState({
    height: "",
    width: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const allData = JSON.parse(localStorage.getItem("data")) || {};

  const changeHeight = (+allData.height * 30.48) / 100; //in meter

  useEffect(() => {
    if (Object.keys(allData).length > 0) {
      setData(allData);
    }
  }, [Object.keys(allData).length > 0]);

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

        <div className="flex mt20 justify-center items-center gap50">
          <div className="flex flex-col gap50">
            <div className="calculation-box">
              <span className="an-14">Age</span>
              <input
                className="calculation-input"
                type="number"
                value={data.age}
                name="age"
                onChange={handleChange}
              />
            </div>
            <div className="calculation-box">
              <span className="an-14">Weight (kg)</span>
              <input
                className="calculation-input"
                type="number"
                value={data.width}
                name="width"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="calculation-box" style={{height: 'fit-content'}}>
            <span className="an-14">Height</span>
            <input
              className="calculation-input"
              type="number"
              value={data.height}
              name="height"
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          className="nextBtn mt30"
          onClick={(e) => {
            localStorage.setItem("data", JSON.stringify(data));
            history.push("/sign-up/diet-type");
          }}
        >
          Next
        </button>
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

export default PhysicalIinfo;
