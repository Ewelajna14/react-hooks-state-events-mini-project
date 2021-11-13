import React from "react";
import Task from "./Task"


function TaskList({tasks, setTask}) {
  const taskList=tasks.map((task, index)=> { 
    return (
    <Task key={index} text={task.text} category={task.category} pressDelete={handleDelete}/>)
  })

function handleDelete(event){
  //DOM Remove//e.target.parentElement.remove() 
  // state remove
  const buttonToDelete =event.target.parentElement.children[1].textContent
  const newArray = tasks.filter((task)=>task.text !== buttonToDelete)
  setTask(newArray)
}  


  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskList}
    </div>
  );
}

export default TaskList;
