import React from "react";

import hammerIcon from "../../assets/images/hammer_icon.png";

import styles from "./HowItWorksSection.module.scss";

const steps = [
  {
    title: "Submit Your Car",
    description: "Enter your car details for inspection on Emirates Auction.",
  },
  {
    title: "Receive Valuation and Offer",
    description:
      "We will check your car and provide you with approved purchase price.",
  },
  {
    title: "Get Your Payment",
    description:
      "After a price is agreed for your car, we will exchange cash on a day that suits you.",
  },
];

const StepItem = ({ number, title, description }) => (
  <div className={styles["single-step-container"]}>
    <div className={styles["step-number-wrapper"]}>
      <span style={styles["step-number"]}>{number}</span>
    </div>

    <div className={styles["step-info-wrapper"]}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

const HowItWorksSection = () => {
  const stepsJSX = (steps || []).map((step, ndx) => (
    <StepItem {...step} number={ndx + 1} key={step.title} />
  ));

  return (
    <section className={styles["how-it-works-container"]}>
      <div className={styles["steps-wrapper"]}>
        <div className={styles["steps"]}>
          <h1>How it works?</h1>
          <p>Sell your car in three simple steps</p>

          {stepsJSX}
        </div>
      </div>

      <div className={styles["banner-wrapper"]}>
        <img
          src={hammerIcon}
          alt="Sell your car by bidding"
          className={styles["hammer-icon"]}
        />
        <h1>Your car will be sold by bidding</h1>
        <p>
          You set the starting price it will be sold for the highest bidder{" "}
        </p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
