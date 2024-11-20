//we create the structure and prop for Add to do list
import React from "react";
import { useState } from "react";

type AddToDoProps = {
  addToDo: (text: string) => void;
};

const AddToDo: React.FC<AddToDoProps> = ({ addToDo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addToDo(text);
      setText(""); //clear the input field after adding
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="add a new task"
        style={{
          flex: "1",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      ></input>
      <button
        type="submit"
        style={{
          backgroundColor: "4caf50",
          color: "black",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </form>
  );
};

export default AddToDo;
