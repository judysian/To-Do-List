//we create the structure and prop for to do item list

import React from "react";
import { ToDo } from "../Type";

type ToDoItemProps = {
  toDo: ToDo;
  toggleComplete: (id: number) => void;
  deleteToDo: (id: number) => void;
};

const ToDoItem: React.FC<ToDoItemProps> = ({
  toDo,
  toggleComplete,
  deleteToDo,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
        justifyContent: "space-between",
        borderBottom: "1px solid #eee",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <input
          type="checkbox"
          checked={toDo.completed}
          onChange={() => toggleComplete(toDo.id)}
        />
        <span
          style={{ textDecoration: toDo.completed ? "line-through" : "none" }}
        >
          {toDo.text}
        </span>
      </div>
      <button
        onClick={() => deleteToDo(toDo.id)}
        style={{
          backgroundColor: "#33e0ff",
          color: "black",
          border: "none",
          borderRadius: "4px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ToDoItem;
