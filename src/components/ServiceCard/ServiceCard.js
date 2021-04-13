import React from "react";

import styles from "./ServiceCard.module.scss";

const ServiceCard = ({ icon, title, description }) => (
  <div className={styles["card-container"]}>
    <div className={styles["card-icon"]}>
      <i className={`fa fa-${icon}`} />
    </div>

    <div className={styles["card-info"]}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default ServiceCard;
