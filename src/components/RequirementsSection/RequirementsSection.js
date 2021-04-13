import React from "react";

import RequirementsInformationSubsection from "./RequirementsInformationSubsection";
import RequiredDocumentsSubsection from "./RequiredDocumentsSubsection";

import styles from "./RequirementsSection.module.scss";

const RequirementsSection = () => (
  <section className={styles["requirements-section-container"]}>
    <RequirementsInformationSubsection />
    <RequiredDocumentsSubsection />
  </section>
);

export default RequirementsSection;
