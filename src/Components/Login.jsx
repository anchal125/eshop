import { useContext, useRef, useState } from "react";
import styles from "./Login.module.css";
import { checkPassword } from "../utils/checker";
import { toast } from "react-toastify";
import { ModalContext } from "../Context/ModalContext";
import { ErrorMessage } from "./ErrorMessage";

export const Login = ({ setName }) => {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const nameRef = useRef();
  const passwordRef = useRef();
  const [passwordError, setPasswordError] = useState("");
  const { setModalOpen } = useContext(ModalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let { valid, error } = checkPassword(passwordRef.current.value);

    if (!valid) {
      setPasswordError(error);
      return;
    }

    toast.success("login succesful");
    setModalOpen(false);

    if (!isLoginMode) {
      setName(nameRef.current.value.split(" ")[0].slice(0, 10));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      action=""
      style={{ padding: "1rem" }}
    >
      <h2 id="login-modal-title">{isLoginMode ? "Login" : "Sign Up"}</h2>

      {!isLoginMode && (
        <div>
          <label htmlFor="name">Name</label>

          <input
            ref={nameRef}
            type="text"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
      )}

      <div>
        <label htmlFor="email">Email</label>

        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>

        <input
          style={
            passwordError ? { borderColor: "var(--accent-color)" } : undefined
          }
          ref={passwordRef}
          type="password"
          id="password"
          placeholder="Enter your password"
          required
          aria-invalid={!!passwordError}
          aria-describedby={passwordError ? "password-error" : undefined}
        />

        <ErrorMessage message={passwordError} id="password-error" />
      </div>

      <button className="accent">{isLoginMode ? "Login" : "Sign Up"}</button>

      <p>
        {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          type="button"
          onClick={() => setIsLoginMode(!isLoginMode)}
          style={{
            color: "var(--accent-color)",
            cursor: "pointer",
          }}
        >
          {isLoginMode ? "Sign Up" : "Login"}
        </button>
      </p>
    </form>
  );
};
