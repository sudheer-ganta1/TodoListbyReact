import React, { useState } from "react";
import ToDoItem from "./components/ToDoItem";

import "./styles.css";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItems() {
    if (inputText.trim() !== "") {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
      setInputText("");
    }
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <div className="container">
        <div className="todo-list">
          <div className="header">
            <h1>To-Do List</h1>
          </div>
          <div className="add-section">
            <input
              onChange={handleChange}
              type="text"
              placeholder="Add a new task"
              className="task-input"
              value={inputText}
            />
            <button onClick={addItems} className="add-btn">
              Add
            </button>
          </div>
          <ul className="tasks">
            {items.map((todoItem, index) => {
              return (
                <ToDoItem
                  key={index}
                  id={index}
                  text={todoItem}
                  onChecked={deleteItem}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
