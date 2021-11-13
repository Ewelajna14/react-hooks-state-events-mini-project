import React from "react";

function Task({text, category, pressDelete}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={pressDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
