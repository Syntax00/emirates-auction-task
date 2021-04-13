import React from "react";

import WidthLimiter from "../UIElements/WidthLimiter/WidthLimiter";
import SectionTitle from "../UIElements/SectionTitle/SectionTitle";
import CarForm from "../CarForm/CarForm";

import video from "../../assets/images/mock_video.png";

import styles from "./StartTodaySection.module.scss";

const StartTodayInformation = () => (
  <div className={styles["informative-content-wrapper"]}>
    <img src={video} alt="Car Sample Video" />

    <div className={styles["informative-content"]}>
      <h1>Why you should sell your car with us?</h1>
      <h2>We support you from start to finish </h2>
      <p>
        We have streamlined the process to sell your car online for quick
        payment to get your free cash offer.
      </p>
      <p>Ready to sell your car?</p>
    </div>
  </div>
);

const StartTodaySection = () => (
  <section className={styles["start-today-container"]}>
    <WidthLimiter>
      <SectionTitle
        title="Start today!"
        description="You are just one click away from selling your car."
      />

      <div className={styles["start-today-content-wrapper"]}>
        <StartTodayInformation />

        <div className={styles["car-form-container"]}>
          <CarForm />
        </div>
      </div>
    </WidthLimiter>
  </section>
);

export default StartTodaySection;
