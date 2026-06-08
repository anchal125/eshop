import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import {
  outsideBlockAccess,
  restoreOutsideAccess,
} from "../utils/modalUtility";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useEffect, useRef } from "react";

export const Modal = ({
  children = "",
  className = "",
  setModalOpen,
  labelledBy,
}) => {
  const modalRef = useRef(null);

  const closeModal = () => {
    setModalOpen(null);
  };

  useOutsideClick(modalRef, closeModal);

  useEffect(() => {
    const previouslyFocused = document.activeElement;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }

      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    outsideBlockAccess();

    modalRef.current.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      restoreOutsideAccess();

      previouslyFocused?.focus();
    };
  }, []);

  return createPortal(
    <div id="modal" className={styles.modalOverlay}>
      <div
        ref={modalRef}
        className={`${className ? styles[className] : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
      >
        <button
          className={styles.closeBtn}
          aria-label="close modal"
          style={{ cursor: "pointer" }}
          onClick={closeModal}
        >
          <span aria-hidden="true">x</span>
        </button>

        {children}
      </div>
    </div>,
    document.body,
  );
};
