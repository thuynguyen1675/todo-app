import React, { useRef, useState } from "react";
import styles from "./styles.module.css";

const InputField = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    if (value) {
      const listTodo = localStorage.getItem("todo-list");
      if (!listTodo) {
        localStorage.setItem(
          "todo-list",
          JSON.stringify([{ id: Date.now(), name: value }])
        );
      } else {
        const a = JSON.parse(listTodo);
        a.push({ id: Date.now(), name: value });
        localStorage.setItem("todo-list", JSON.stringify(a));
      }
    }
  };
  return (
    <form
      className={styles.input}
      onSubmit={(e) => {
        inputRef.current?.blur();
        handleSubmit();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task..."
        className={styles.input__box}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className={styles.input_submit}>
        Go{" "}
      </button>
    </form>
  );
};

export default InputField;
