 import React from 'react'
 
 const TodoItem = ({todo,onDelete}) => {
   return (
     <div className='box1'>
       <h3>{todo.title}</h3>
       <p>{todo.desc}</p>
       <button className="btn btn-sm btn-danger mb-3" onClick={()=>{onDelete(todo)}}>Delete</button>
     </div>
   )
 }
 
 export default TodoItem
