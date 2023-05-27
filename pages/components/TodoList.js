import React, { useEffect, useState } from "react";
import SingleTodo from "./SingleTodo";
import styles from "./styles.module.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const loadData = () => {
    const listTodo = localStorage.getItem("todo-list");
    setTodos(JSON.parse(listTodo) || []);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    todos &&
    todos.length > 0 && (
      <div className={styles.todos}>
        {todos.map((item) => (
          <SingleTodo
            todo={item}
            todos={todos}
            key={item.id}
            setTodos={setTodos}
          />
        ))}
      </div>
    )
  );
};

export default TodoList;
