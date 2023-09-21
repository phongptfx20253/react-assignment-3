import React from "react";
import classes from "./Title.module.css";

const Title = ({ children, onClick, className }) => {
  return (
    <span className={`${classes.title} ${className}`} onClick={onClick}>
      {children}
    </span>
  );
};

export default Title;
