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
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <span>LOGO</span>
        <span>Hi ThuyNT</span>
      </nav>
      <InputField />
      <TodoList />
    </div>
  );
}
