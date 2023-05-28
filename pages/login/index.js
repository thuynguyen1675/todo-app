import { useState } from "react";
import styles from "./styles.module.css";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const username = localStorage.getItem("name");
    const pw = localStorage.getItem("password");
    if (name === username && password === pw) {
      location.replace("/");
    } else if (!name || !password) {
      setError("Username and password are required");
    } else {
      setError("Username or password is wrong");
    }
  };

  return (
    <>
      <div className={styles.login_page}>
        <h1>Welcome to todo list app</h1>
        <form className={styles.form} onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setName(e.target.value)}
              id="username"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
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

            <button id="btn-login">login</button>
            <p className={styles.message}>
              Not registered? <a href="/sign-up">Create an account</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
