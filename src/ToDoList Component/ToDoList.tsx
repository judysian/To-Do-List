//we create the structure and prop for to do list

import React from "react";
import { ToDo } from "../Type";
import ToDoItem from "../ToDoItem Component/ToDoItem";
//added placeholders for key functions

type ToDoListProps = {
  toDos: ToDo[];
  toggleComplete: (id: number) => void;
  deleteToDo: (id: number) => void;
};

const ToDoList: React.FC<ToDoListProps> = ({
  toDos,
  toggleComplete,
  deleteToDo,
}) => {
  return (
    <div>
      {toDos.map((toDo) => (
        <ToDoItem
          key={toDo.id}
          toDo={toDo}
          toggleComplete={toggleComplete}
          deleteToDo={deleteToDo}
        />
      ))}
    </div>
  );
};

export default ToDoList;
