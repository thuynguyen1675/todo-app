import { useEffect, useState } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

export default function Home() {
  useEffect(() => {
    const user = localStorage.getItem("name");
    if (!user) {
      window.location.replace("/login");
    }
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <h1 style={{ margin: "20px 0", textAlign: "center" }}>
        Welcome to todo app
      </h1>
      <InputField />
      <TodoList />
    </div>
  );
}
