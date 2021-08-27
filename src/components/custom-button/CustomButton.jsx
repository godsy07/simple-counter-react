import React from "react";
import "./custom-button.styles.css";

const CustomButton = ({ text, handleClick }) => {
  console.log(text);
  console.log(handleClick);
  return (
    <button className='custom-button' onClick={handleClick}>
      {text}
    </button>
  );
};

export default CustomButton;
