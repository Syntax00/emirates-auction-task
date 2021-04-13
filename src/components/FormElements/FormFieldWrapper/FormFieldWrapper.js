import React from "react";

import styles from "./FormFieldWrapper.module.scss";

const FormFieldWrapper = ({ input, meta, children, label }) => {
  const fieldHasError = meta.error && meta.touched;

  return (
    <div className={styles["form-field"]}>
      <label htmlFor={input.name} className={styles.label}>
        {label}
      </label>

      {children}

      {fieldHasError && (
        <div className={styles["error-container"]}>
          <span>Please insert {label.toLowerCase()}</span>
        </div>
      )}
    </div>
  );
};

export default FormFieldWrapper;
