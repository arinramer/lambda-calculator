import React from "react";

const NumberButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="button" onClick={() => props.displayValue === 0 ? props.setDisplayValue(props.button) :
        props.setDisplayValue(props.button + props.displayValue)}>
        <span>{props.button}</span>
      </button>
    </>
  );
};

export default NumberButton;