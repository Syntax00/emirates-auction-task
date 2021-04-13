import React from "react";

import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ title, description }) => (
  <div className={styles["section-title-wrapper"]}>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);

export default SectionTitle;
