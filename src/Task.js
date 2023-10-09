import React, { useState } from "react";
import "./Task.css";
const Task = ({ task, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditSave = () => {
    if (editedText.trim() !== "") {
      onEdit(task.id, editedText);
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedText(task.text);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <div className="btns">
            <button onClick={handleEditSave}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
          </span>
          <div className="btns">
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Task;
