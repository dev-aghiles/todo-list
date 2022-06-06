import React from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ setInputText, setToDos, toDos, inputText, status, setStatus }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitEventHandler = (e) => {
    e.preventDefault();
    setToDos([...toDos, { id: uuidv4(), completed: false, text: inputText }]);
    setInputText("");
  };
  const filterHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
        value={inputText}
      />
      <button
        className="todo-button"
        type="submit"
        onClick={submitEventHandler}
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          name="todos"
          className="filter-todo"
          onChange={(e) => filterHandler(e)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
