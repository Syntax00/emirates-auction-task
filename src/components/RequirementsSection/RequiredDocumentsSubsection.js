import React from "react";

import WidthLimiter from "../UIElements/WidthLimiter/WidthLimiter";

import styles from "./RequirementsSection.module.scss";

const requiredDocuments = [
  { title: "Emirates ID" },
  {
    title: "Possession certificate",
    description: "(Dubai certificate or transfer to Dubai)",
  },
  { title: "Bank account details" },
];

const RequiredDocumentsSubsection = () => {
  const requiredDocumentsJSX = (requiredDocuments || []).map(
    ({ title, description }) => (
      <div className={styles["document"]} key={title}>
        <p>{title}</p>
        {(description && <span>{description}</span>) || null}
      </div>
    )
  );

  return (
    <section className={styles["required-documents-container"]}>
      <WidthLimiter>
        <h1 className={styles["required-docs-title"]}>
          Required Documentation
        </h1>

        <div className={styles["documents"]}>{requiredDocumentsJSX}</div>
      </WidthLimiter>
    </section>
  );
};

export default RequiredDocumentsSubsection;
