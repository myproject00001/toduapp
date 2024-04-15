import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
    // let [todos,settodos]=useState(["sample task"])
    let [todos, settodos] = useState([{ task: "sample task", id: uuidv4(),taskstatus:false }])
    let [newTodo, setnewtodo] = useState("")

    function addTask() {
        // settodos((prev)=>{return [...prev,newTodo]})
        settodos((prev) => { return [...prev, { task: newTodo, id: uuidv4(),taskstatus:false }] })
        setnewtodo("")
    }

    let deletetodo = (id) => {
        settodos(todos.filter((ele) => {
            return ele.id != id
        }))

    }
    let update=()=>{
        settodos((prev)=>
            prev.map((todo)=>{
                return {
                    ...todo,
                    task:todo.task.toUpperCase()
                }
        }))
    }
    let updateone=(id)=>{
        settodos((prev) =>
            prev.map((todo)=>{
                if(id == todo.id){
                return {
                    ...todo, task:todo.task.toUpperCase()
                }}
                else{
                   return todo;
                }
            })
        )
    }
    let statusupdate=(id)=>{
        settodos((prev)=>
            prev.map((todo)=>{
                if(id == todo.id){
                    return {
                        ...todo,
                        taskstatus:true
                    }
                    
                }
                else {
                    return todo
                }
            })
        )
    }
    return (
        <div>
            <input value={newTodo} type="text" onChange={(e) => { setnewtodo(e.target.value) }} placeholder='add a task' />
            <br />
            <button onClick={addTask}>Add task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr />
            <h4>Todo list</h4>
            <ul>
                {todos.map((todo) => {
                    return <li key={todo.id}>
                        { todo.taskstatus? <span style={{textDecoration:"line-through"}}>{todo.task}</span>:<span>{todo.task}</span>}
                        {/* <span style={todo.taskstatus ?{textDecoration:"line-throgh"}:{}}>{todo.task}</span> */}
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => { deletetodo(todo.id) }}>delete</button>
                        <button onClick={() => { updateone(todo.id) }}>update one</button>
                        <button onClick={()=>{statusupdate(todo.id)}}>Status</button>
                    </li>
                })}
            </ul>
            <button onClick={()=>{update()}}>update</button>
        </div>
    )
}

export default TodoList