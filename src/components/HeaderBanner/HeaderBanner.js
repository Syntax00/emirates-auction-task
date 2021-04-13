import React from "react";

import CustomButton from "../UIElements/Button/CustomButton";

import styles from "./HeaderBanner.module.scss";

const HeaderBanner = () => (
  <section className={styles["header-banner-container"]}>
    <div className={styles["banner-content"]}>
      <h1>Selling you car now </h1>
      <h2>Is easier than ever.</h2>
    </div>

    <div className={styles["banner-controllers"]}>
      <CustomButton icon="angle-down" className={styles["start-today-btn"]}>
        Start Today
      </CustomButton>
    </div>
  </section>
);

export default HeaderBanner;
