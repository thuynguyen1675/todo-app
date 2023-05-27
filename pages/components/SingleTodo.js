import React, { useEffect, useState, useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import styles from "./styles.module.css";

const SingleTodo = ({ todo, todos, setTodos }) => {
  // const handleDelete = (id) => {
  //   setTodos(todos.filter((item) => item.id !== id));
  // };

  const [isEdit, setIsEdit] = useState(false);
  const [todoEdit, setTodoEdit] = useState(todo.name);

  const handleEdit = (e, id) => {
    e.preventDefault();
    const todosEdited = todos.map((item) =>
      item.id !== id ? item : { ...item, name: todoEdit }
    );
    setTodos(todosEdited);
    setIsEdit(false);
    localStorage.setItem("todo-list", JSON.stringify(todosEdited));
  };
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit]);
  return (
    <form
      className={styles.todos__single}
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {isEdit ? (
        <input
          ref={inputRef}
          type="text"
          value={todoEdit}
          className={styles.todos__single_text}
          onChange={(e) => {
            setTodoEdit(e.target.value);
          }}
          onBlur={() => {
            setTodoEdit(todo.name);
            setIsEdit(false);
          }}
        />
      ) : (
        <span
          className={styles.todos__single_text}
          onDoubleClick={() => {
            setIsEdit(true);
          }}
        >
          {todo.name}
        </span>
      )}
    </form>
  );
};

export default SingleTodo;
