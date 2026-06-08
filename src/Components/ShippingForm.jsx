import { useState } from "react";
import { checkShippingFormData } from "../utils/checker";
import { useContext } from "react";
import { ModalContext } from "../Context/ModalContext";
import styles from "./ShippingForm.module.css";
import { ErrorMessage } from "./ErrorMessage";

export const ShippingForm = ({ setShippingFormData, shippingFormData }) => {
  const [formData, setFormData] = useState(shippingFormData);
  const { setModalOpen } = useContext(ModalContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: { ...formData[e.target.id], value: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkShippingFormData(formData, setFormData)) return;
    const data = Object.fromEntries(
      Object.values(formData).map((item) => [item.label, item.value]),
    );
    setShippingFormData(formData);
    setModalOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 id="shipping-modal-title">Shipping and Billing Information</h2>
      {Object.values(formData).map((item) => {
        if (item.inputType === "input") {
          return (
            <div key={item.id} className={styles.fieldGroup}>
              <label htmlFor={item.id}>
                {item.label}:{" "}
                <span aria-hidden="true">
                  <sup>*</sup>
                </span>
              </label>
              <div>
                <input
                  value={item.value}
                  onChange={handleChange}
                  id={item.id}
                  type={item.type}
                  placeholder={item.placeholder}
                  aria-invalid={!!item.error}
                  aria-describedby={item.error ? `${item.id}-error` : undefined}
                  required
                />
                <br />
                <ErrorMessage message={item.error} id={`${item.id}-error`} />
              </div>
            </div>
          );
        } else if (item.inputType === "select") {
          return (
            <div key={item.id} className={styles.fieldGroup}>
              <label htmlFor={item.id}>
                {item.label}:
                <span aria-hidden="true">
                  <sup>*</sup>
                </span>
              </label>
              <select
                value={item.value}
                onChange={handleChange}
                name={item.label}
                id={item.id}
                required
              >
                <option value="" disabled>
                  {item.label}
                </option>
                {item.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          );
        }
      })}

      <button className={`accent ${styles.button}`}>Submit</button>
    </form>
  );
};
