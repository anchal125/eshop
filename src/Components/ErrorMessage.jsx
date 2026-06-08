import { MdError } from "react-icons/md";

export const ErrorMessage = ({ message = "", id = "" }) => {
  return (
    <small
      style={{
        color: "var(--accent-color)",
        display: "flex",
        alignItems: "center",
        gap: ".2rem",
      }}
      role="alert"
      aria-atomic="true"
      id={id}
    >
      {message && (
        <>
          <MdError aria-hidden="true" />
          {message}
        </>
      )}
    </small>
  );
};
