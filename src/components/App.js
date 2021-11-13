import React, {useState}  from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const[tasks, setTask] = useState(TASKS)
  const [filterBy, setFilterBy]=useState("All")
  const[submittedData, setSubmittedData]= useState([])
  
  function filterTaskByCategory(event){
    setFilterBy(()=> event.target.innerText)
    filterTasks()
  }

  function filterTasks(){
    return tasks.filter(task =>{
      if( filterBy==="All"){
        return true
      }else{
        return task.category === filterBy
      }
    });
  }

  let filteredTasks = filterTasks()

  let renderedTasks = filterBy? filteredTasks: TASKS  

  function handleFormSubmit(event, details, category){
  event.preventDefault()
  setTask([...tasks,{text:details, category:category}])
  document.getElementById("formdetails").value=""
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterTaskByCategory={filterTaskByCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleFormSubmit}/>
      <TaskList tasks={renderedTasks} setTask={setTask}/>
    </div>
  );
}

export default App;
