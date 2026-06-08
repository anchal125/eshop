import { useContext } from "react";
import { Accordian } from "./Accordian";
import { AccordianItem } from "./AccordianItem";
import styles from "./CheckoutInfo.module.css";
import { ModalContext } from "../Context/ModalContext";

export const CheckoutInfo = ({ shippingFormData }) => {
  const { setModalOpen } = useContext(ModalContext);

  return (
    <>
      <button
        onClick={() => {
          setModalOpen("shipping");
        }}
        style={{ background: "transparent", color: "var(--accent-color)" }}
      >
        Change Shipping/Billing Info
      </button>
      <Accordian defaultActive={2} multiple={false}>
        <AccordianItem className={styles.accordianItem}>
          <h3>Billing Information</h3>
          {Object.values(shippingFormData)
            .slice(0, 4)
            .map((item) => (
              <p>
                <b>{item.label}</b>: {item.value}
              </p>
            ))}
        </AccordianItem>

        <AccordianItem className={styles.accordianItem}>
          <h3>Shipping Information</h3>
          {Object.values(shippingFormData)
            .slice(4)
            .map((item) => (
              <p>
                <b>{item.label}</b>: {item.value}
              </p>
            ))}
        </AccordianItem>

        <AccordianItem className={styles.accordianItem}>
          <h3>Payment Option</h3>
          {
            <>
              <label htmlFor="upi">UPI</label>
              <input
                style={{ marginLeft: ".2rem" }}
                id="upi"
                type="radio"
                name="payment"
                required
              />
              <label htmlFor="cod"> COD</label>
              <input
                style={{ marginLeft: ".2rem" }}
                id="cod"
                type="radio"
                name="payment"
                required
              />
            </>
          }
        </AccordianItem>
      </Accordian>
    </>
  );
};
