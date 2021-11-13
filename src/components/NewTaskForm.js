import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
const [details, setDetails]=useState("")
const [category, setCategory] = useState()

function handleChange(event){
  if(event.target.name ==="text"){
    setDetails(event.target.value)
  }else if (event.target.name==="category"){
    setCategory(event.target.value)
  }
}


function renderCategories(){ return categories.map((category)=>{
  if( category !== "All"){
  return(  
  <option key={category} value={category}>{category}</option>)}
})}
  
  return (
    <form onSubmit={(event)=>onTaskFormSubmit(event, details, category)} className="new-task-form">
      <label>
        Details
        <input onChange={handleChange} type="text" name="text" value={details} id="formdetails"/>
      </label>
      <label>
        Category
        <select onChange={handleChange} name="category" value={category} id="formcategory">
          {/* render <option> elements for each category here */}
          {renderCategories()}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
