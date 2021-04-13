import React from "react";

import styles from "./WidthLimiter.module.scss";

const WidthLimiter = ({ children }) => (
  <div className={styles["width-limiter"]}>{children}</div>
);

export default WidthLimiter;
