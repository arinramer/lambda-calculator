import React from "react";
import "../../../App.css";

const SpecialButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="button">
        <span>{props.button}</span>
      </button>
    </>
  );
};

export default SpecialButton;