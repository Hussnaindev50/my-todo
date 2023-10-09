import React, { useState } from "react";
import Task from "./Task";
import "./App.css";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [deletedTasks, setDeletedTasks] = useState([]);
  const addTask = () => {
    if (text.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: text,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setText("");
    }
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
  const editTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };
  const deleteTask = (taskId) => {
    const deletedTask = tasks.find((task) => task.id === taskId);
    if (deletedTask) {
      setDeletedTasks([...deletedTasks, deletedTask]);
    }
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  return (
    <div className="main">
      <div className="main-2">
        <div className="txt">
          <h2>To-Do List</h2>
        </div>
        <div>
          <input
            className="inp"
            type="text"
            placeholder="Add a task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <div>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onToggle={toggleTask}
              onEdit={editTask}
            />
          ))}
        </div>
        <div>
          <h4>
            <u>Deleted Tasks</u>
          </h4>
          <ul>
            {deletedTasks.map((task) => (
              <li key={task.id}>{task.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default App;
