import React from "react";
import ToDo from "./ToDo";

function ToDoList({ toDos, setToDos, status, setStatus }) {
  const deleteHandler = (idElement) => {
    let elementDelete = toDos.find((o) => o.id === idElement);
    setToDos(toDos.filter((el) => el !== elementDelete));
  };
  const completedHandler = (idEl) => {
    setToDos(
      toDos.map((toDo) => {
        if (idEl === toDo.id) {
          let newTodo = { ...toDo, completed: !toDo.completed };
          return newTodo;
        }
        return toDo;
      })
    );
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {toDos.map(({ id, text, completed }) => (
          <ToDo
            key={id}
            id={id}
            text={text}
            completed={completed}
            deleteHandler={deleteHandler}
            completedHandler={completedHandler}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
