import React from "react";
import { Form, Field } from "react-final-form";

import FormFieldWrapper from "../FormElements/FormFieldWrapper/FormFieldWrapper";
import SelectField from "../FormElements/SelectField/SelectField";
import TextInput from "../FormElements/TextInput/TextInput";
import CustomButton from "../UIElements/Button/CustomButton";

import cars from "../../mock_data";

import styles from "./CarForm.module.scss";

const required = (value) => (value ? undefined : "Required");
const onSubmit = async (values) => {
  console.log({ values });
};
const carMakes = cars.map(({ brand }) => ({
  label: brand,
  value: brand.toLowerCase(),
}));
const getSelectedCarModel = (selectedBrand = {}) => {
  const { models = [] } =
    cars.find(({ brand }) => brand === selectedBrand.label) || {};

  return models.map((model) => ({
    label: model,
    value: model.toLowerCase(),
  }));
};

const CarForm = () => (
  <div className={styles["car-form-container"]}>
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form: { change }, values }) => (
        <form onSubmit={handleSubmit}>
          <h2 className={styles["subform-title"]}>Enter your car details</h2>

          <Field name="carMake" validate={required}>
            {({ input, meta }) => (
              <FormFieldWrapper input={input} meta={meta} label="Car Make">
                <SelectField
                  {...input}
                  placeholder="Select your car brand ..."
                  options={carMakes}
                  hasError={meta.error && meta.touched}
                  onChange={(e) => {
                    input.onChange(e);

                    // When the brand changes, reset the currently-selected model
                    change("carModel", undefined);
                  }}
                />
              </FormFieldWrapper>
            )}
          </Field>

          <Field name="carModel" validate={required}>
            {({ input, meta }) => (
              <FormFieldWrapper input={input} meta={meta} label="Car Model">
                <SelectField
                  {...input}
                  placeholder="Select your car model ..."
                  options={getSelectedCarModel(values.carMake)}
                  hasError={meta.error && meta.touched}
                />
              </FormFieldWrapper>
            )}
          </Field>

          <br />

          <h2 className={styles["subform-title"]}>Enter your Contact Info</h2>

          <Field name="fullName" validate={required}>
            {({ input, meta }) => (
              <FormFieldWrapper
                input={input}
                meta={meta}
                label="Your Full Name"
              >
                <TextInput
                  input={input}
                  type="text"
                  placeholder="Insert your full name ..."
                  hasError={meta.error && meta.touched}
                />
              </FormFieldWrapper>
            )}
          </Field>

          <Field name="phoneNumber" validate={required}>
            {({ input, meta }) => (
              <FormFieldWrapper
                input={input}
                meta={meta}
                label="Your phone Number"
              >
                <TextInput
                  input={input}
                  type="phone"
                  placeholder="Insert your phone number ..."
                  hasError={meta.error && meta.touched}
                />
              </FormFieldWrapper>
            )}
          </Field>

          <div className={styles["form-controllers"]}>
            <CustomButton type="submit" icon="angle-right">
              Send Your Inquiry
            </CustomButton>
          </div>
        </form>
      )}
    />
  </div>
);

export default CarForm;
