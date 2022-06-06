import React from "react";

function ToDo({ id, text, completed, deleteHandler, completedHandler }) {
  return (
    <div className="todo">
      <li className={`todo-item ${completed && "completed"}`}>{text}</li>
      <button className="complete-btn" onClick={() => completedHandler(id)}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => deleteHandler(id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default ToDo;
