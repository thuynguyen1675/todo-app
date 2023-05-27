import { useState } from "react";
import styles from "./styles.module.css";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = () => {
    const username = localStorage.getItem("name");
    const pw = localStorage.getItem("password");
    if (name === username && password === pw) {
      location.replace("/");
    } else {
      setError("Username or password is wrong");
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
              placeholder="username"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
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

            <button onClick={handleLogin}>login</button>
            <p className={styles.message}>
              Not registered? <a href="/sign-up">Create an account</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
