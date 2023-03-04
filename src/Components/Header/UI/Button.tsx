import React ,{useState} from "react";
import "../Styles.css";

const Button = ({ text, bg }) => {

    const [Color, color] = useState(true)

    function handler(){
        color(false)
    }

    if ( text == ) {
        
    }
    

  let classes = Color ? 'btn' : 'btn Bt'

  return <>
      <button className={classes} >{text}</button>
  </>
};

export default Button;
