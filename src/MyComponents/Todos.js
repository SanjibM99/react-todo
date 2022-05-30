import React from 'react'
import TodoItem from './TodoItem'

export const Todos = (props) => {
  let myStyle={
    minHeight:'70vh'
  }
  return (
    <div className='container my-3' style={myStyle}>
      <h1 className='text-center my-3 box'>Todos List</h1>
      <div className='text-center '>{props.todos.length===0? "No Todos to Display":
      props.todos.map((todo)=>{

          return(
            <>
           <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
           <hr />
           </>
          )
      })}
      
      </div>

    </div>
  )
}
