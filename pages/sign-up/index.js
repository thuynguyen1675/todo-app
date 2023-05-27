import { useState } from "react";
import styles from "./styles.module.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {
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
        <div className={styles.form}>
          <div>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Confirm password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <div
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
            <button onClick={handleSignUp}>create</button>
            <p className={styles.message}>
              Already registered? <a href="/login">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
