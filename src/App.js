import React, { useState, useEffect } from "react";

import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filterToDos, setFilterToDos] = useState([]);
  useEffect(() => {
    switch (status) {
      case "completed":
        setFilterToDos(toDos.filter((el) => el.completed === true));
        break;
      case "uncompleted":
        setFilterToDos(toDos.filter((el) => el.completed === false));
        break;
      default:
        setFilterToDos(toDos);
        break;
    }
  }, [status, toDos]);

  return (
    <div className="App">
      <header>
        <h1>Aghiles's To Do Liste</h1>
      </header>
      <Form
        setInputText={setInputText}
        toDos={toDos}
        setToDos={setToDos}
        inputText={inputText}
        status={status}
        setStatus={setStatus}
      />
      <ToDoList
        toDos={filterToDos}
        setToDos={setToDos}
        status={status}
        setStatus={setStatus}
      />
    </div>
  );
}

export default App;
