import React from "react";
import Select from "react-select";

const SelectField = (props) => {
  const { hasError } = props;

  return (
    <Select
      {...props}
      styles={{
        control: (styles) => ({
          ...styles,
          background: hasError ? "#FFF6F6" : "#fff",
          border: hasError ? "1px solid #ec1c24" : "1px solid #bfc4ce",
          borderBottomLeftRadius: hasError ? "0" : "5px",
          borderBottomRightRadius: hasError ? "0" : "5px",
          minHeight: "40px",
        }),
      }}
    />
  );
};

export default SelectField;
