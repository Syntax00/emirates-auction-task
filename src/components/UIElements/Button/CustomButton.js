import React from "react";

import styles from "./CustomButton.module.scss";

const CustomButton = ({
  children,
  className,
  icon,
  type = "button",
  onClick = () => null,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`${styles["btn-wrapper"]} ${className}`}
  >
    {children}
    
    {icon ? <i className={`fa fa-${icon}`} /> : null}
  </button>
);

export default CustomButton;
