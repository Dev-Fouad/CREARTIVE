import React from "react";
import "../Styles.css";

const Button = ({ text}) => {

  return (
    <>
      <button className='btn'>{text}</button>
    </>
  );
};

export default Button;
