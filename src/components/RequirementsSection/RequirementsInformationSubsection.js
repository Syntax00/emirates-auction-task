import React from "react";

import WidthLimiter from "../UIElements/WidthLimiter/WidthLimiter";
import SectionTitle from "../UIElements/SectionTitle/SectionTitle";

import styles from "./RequirementsSection.module.scss";

const requirementsInfo = [
  "The car must be brought in good working condition",
  "If the car is sold for less than AED 5,000, the company commission is only AED 500.",
  "In case the chassis is not OK, we'll do a registration test (AED 170 is the cost).",
  "For the classic cars, trucks and heavy equipment, you must bring export test only and the commission is 7% (minimum commission 1000 AED).",
  "The commission is 5% for GCC cars and 7% for imported cars (minimum commission 1000 AED).",
  "For the equipment (generator, scissor lift, electric forklift ..... etc) Tax invoice is required.",
  "If the item is sold, the check will be deposit in your bank account after 10 working days from the time of auction’s conclusion",
  "We'll do a comprehensive test (AED 300 is the cost).",
];

const RequirementItem = ({ text }) => (
  <div className={styles["requirement-item"]}>
    <div className={styles["circle-wrapper"]}>
      <i className="fa fa-circle" />
    </div>

    <div className={styles["requirement-text-wrapper"]}>
      <p>{text}</p>
    </div>
  </div>
);

const RequirementsInformationSubsection = () => {
  const requirementItemsJSX = (requirementsInfo || []).map((reqItemText) => (
    <RequirementItem text={reqItemText} key={reqItemText} />
  ));

  return (
    <section className={styles["requirements-information"]}>
      <WidthLimiter>
        <SectionTitle
          title="Get prepared before our call"
          description="Required Documents & Procedures"
        />

        <div className={styles["requirements-list-container"]}>
          {requirementItemsJSX}
        </div>
      </WidthLimiter>
    </section>
  );
};

export default RequirementsInformationSubsection;
