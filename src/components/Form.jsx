import React, { useEffect, useState } from "react";
import Styles from "./Styles";
import { Form as FormFinal, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { postForm } from "../redux/Form/actions";

const required = (value) => (value ? undefined : "Required");
const mustBeNumber = (value) => (isNaN(value) ? "Must be a number" : undefined);
const minValue = (min) => (value) =>
  isNaN(value) || value.length >= min
    ? undefined
    : `Should be greater than ${min} symbols`;
const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const Form = () => {
  const dispatch = useDispatch();
  const {
    formReducer: { form },
    basketReducer: { selectedProducts },
  } = useSelector((state) => state);
  const [products, setProducts] = useState([]);

  const data = products.map((product) => {
    return {
      id: product.id,
      quantity: product.quantity,
    };
  });

  useEffect(() => {
    setProducts(selectedProducts);
  }, [selectedProducts]);
  const onSubmit = (values) => {
    dispatch(postForm({ ...values, products: [...data] }));
  };

  return (
    <Styles>
      <FormFinal
        onSubmit={onSubmit}
        initialValues={{ ...form }}
        render={({ handleSubmit, form, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Field name="firstName" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>First Name</label>
                  <input {...input} type="text" placeholder="First Name" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="lastName" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Last Name</label>
                  <input {...input} type="text" placeholder="Last Name" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="address" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Address</label>
                  <input {...input} type="text" placeholder="Address" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="phone"
              validate={composeValidators(required, mustBeNumber, minValue(4))}
            >
              {({ input, meta }) => (
                <div>
                  <label>Phone</label>
                  <input {...input} type="text" placeholder="Phone" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Submit
              </button>
              <button type="button" onClick={form.reset} disabled={submitting}>
                Reset
              </button>
            </div>
          </form>
        )}
      />
    </Styles>
  );
};

export default Form;
