import React from "react";

function CategoryFilter({categories, filterTaskByCategory}) {

  function handleButtonClick(event){
   let buttons = [...event.target.parentElement.children]
   buttons.map((button)=>{
     button.className=" "
   })
   event.target.className="selected"
   filterTaskByCategory(event)

  }

   function renderButtons(){
     return categories.map((category)=> {
       return(
         <button onClick={handleButtonClick} key={category}>{category}</button>
       )
     })
   }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {renderButtons()}
    </div>
  );
}

export default CategoryFilter;
