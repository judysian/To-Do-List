import React, { useState } from "react";
import { ToDo } from "./Type";
import ToDoList from "./ToDoList Component/ToDoList";
import AddToDo from "./AddToDo Component/AddToDo";

const App: React.FC = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  //function to add a new to do

  const addToDo = (text: string) => {
    const newToDo: ToDo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setToDos([...toDos, newToDo]);
  };

  //function to toggle the completion status of a to-do

  const toggleComplete = (id: number) => {
    setToDos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo
      )
    );
  };

  //function to delete a new to do
  const deleteToDo = (id: number) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };
  return (
    <div
      style={{
        backgroundColor: "bisque",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        maxWidth: "100%",
        textAlign: "center",
      }}
    >
      <h1>To-Do Lists</h1>
      <AddToDo addToDo={addToDo} />
      <ToDoList
        toDos={toDos}
        toggleComplete={toggleComplete}
        deleteToDo={deleteToDo}
      />
    </div>
  );
};
export default App;
