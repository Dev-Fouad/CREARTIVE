import React ,{useState} from "react";
import "../Styles.css";

const Button = ({ text, bg }) => {
    

  let classes = "btn  Bt  Bn"

  return <>
      <button className={classes}>{text}</button>
  </>
};

export default Button;
