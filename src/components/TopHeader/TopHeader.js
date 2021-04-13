import React from "react";

import CustomButton from "../UIElements/Button/CustomButton";
import WidthLimiter from "../UIElements/WidthLimiter/WidthLimiter";

import logo from '../../assets/images/logo.png';

import styles from "./TopHeader.module.scss";

const TopHeader = () => (
  <header className={styles["main-header"]}>
    <WidthLimiter>
      <div className={styles["wrapper"]}>
        <div className={styles["logo-wrapper"]}>
          <img src={logo} alt="Emirates Auction Brand" />
        </div>

        <div className={styles["header-controllers-wrapper"]}>
          <CustomButton className={styles['arabic-btn']}>العربية</CustomButton>
        </div>
      </div>
    </WidthLimiter>
  </header>
);

export default TopHeader;
