import React from 'react'
import { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("")

    const submit=(e)=>{
        e.preventDefault();
        if(!title||!desc){
            alert("Alert or Desc cannot be blank")
        }
        else{
        props.addTodo(title,desc);
        setTitle("")
        setDesc("")
        }
    }
    return (
        <div className='container'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3 ">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text"  value={title} onChange={(e)=>setTitle(e.target.value)}className="form-control" id="title" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" className="form-control" id="desc" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-success ">Submit</button>
            </form>
        </div>
    )
}
