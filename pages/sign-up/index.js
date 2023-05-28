import { useState } from "react";
import styles from "../login/styles.module.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (name && password && password === confirmPassword) {
      localStorage.setItem("name", name);
      localStorage.setItem("password", password);
      location.replace("/");
    } else if (!name || !password || !confirmPassword) {
      setError("All field are required");
    } else {
      setError("Confirm password is not true");
    }
  };

  return (
    <>
      <div className={styles.login_page}>
        <h1>Welcome to todo list app</h1>
        <form className={styles.form} onSubmit={handleSignUp}>
          <div>
            <input
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <div
              id="error-field"
              style={{
                color: "red",
                textAlign: "left",
                fontSize: "12px",
                float: "left",
                visibility: !error && "hidden",
                height: "20px",
                width: "200px",
              }}
            >
              {error}
            </div>
            <button id="btn-signin">create</button>
            <p className={styles.message}>
              Already registered? <a href="/login">Sign In</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
