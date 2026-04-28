import styles from "./Modal.module.css"

import { useOutsideClick } from "../hooks/UseOutsideClick";
import { useRef } from "react";


export const Modal = ({ children, className='', setModalOpen }) => {

  const modalRef = useRef(null);

  const closeModal = () => {
    setModalOpen(null);
  };

  useOutsideClick(modalRef, closeModal);

  return (
    <div className={styles.modalOverlay}>
      <div
        ref={modalRef}
        className={`${className ? styles[className] : ""}`}
      >
        <span style={{ cursor: "pointer" }} onClick={closeModal}>
          x
        </span>
        {children}
      </div>
    </div>
  );
};
