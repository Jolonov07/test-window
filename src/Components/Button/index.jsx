import React from "react";
import cls from "./Button.module.scss";

const Button = ({ text, onClick, type = "button" }) => {
  return (
    <button type={type} onClick={onClick} className={cls.btn}>
      {text}
    </button>
  );
};

export default Button;
