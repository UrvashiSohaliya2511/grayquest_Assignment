import React from "react";
import style from "./Button.module.scss";

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick} className={style.btn}>
      {text}
    </button>
  );
};

export default Button;
