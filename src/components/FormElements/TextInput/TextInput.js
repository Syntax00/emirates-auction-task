import React from "react";

import styles from "./TextInput.module.scss";

const TextInput = ({ input, hasError, ...rest }) => (
  <input
    {...input}
    className={`${styles["text-input"]} ${hasError ? styles.error : ""}`}
    {...rest}
  />
);

export default TextInput;
