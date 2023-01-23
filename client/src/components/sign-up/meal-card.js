import React from "react";
import Checkbox from "@mui/material/Checkbox";

const MealCard = (props) => {
  return (
    <div style={{ display: "block" }}>
      <div className="an-18 bold-text">
        <Checkbox /> {props?.lunchName}
      </div>
      <div className="meal_card">
        <div className="an-25 bold-text">
          Rs. {props.price}
          <span className="an-18 medium-text">/meal</span>
        </div>
        <div className="an-20 bold-text my20">{props.type}</div>
        <div className="an-20 bold-text">
          {props?.discount ? `${props?.discount}%` : ""}
        </div>
      </div>
    </div>
  );
};

export default MealCard;
