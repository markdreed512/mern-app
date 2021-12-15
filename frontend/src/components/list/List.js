import { useState } from 'react'
import { uid } from 'uid'
import './List.css'

function List() {
    const [ todos, setTodos ] = useState([])
    const [ todo, setTodo ] = useState("")
    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let newTodo = {
            id: uid(),
            text: todo,
            done: false
        }
        setTodos([...todos, newTodo])
        setTodo('')
    }
    const handleCheck = (e) => {
        let newTodos = todos.map((todo) => {
            return todo.id === e.target.id? {id:todo.id, text:todo.text, done: !todo.done} : todo
        })
        setTodos(newTodos)
    }
    return (
        <div className="container">
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={todo} placeholder="Enter Todo"/>
            <input type="submit" value="ADD" />
        </form>
        <ul className="todos">
            {
                todos.map((todo, i) => {
                    return(
                        <>
                        <li key={todo.id} className={todo.done? "strike": "no-strike"}>
                            <span>
                            <input type="checkbox" id={todo.id} key={todo.id} checked={todo.done} onChange={handleCheck}/>
                            {todo.text}
                            </span>
                            <span><button className="delete">Delete</button></span>
                        </li>
                        </>
                    )
                })
            }
        </ul>
        </div>
    )
}

export default List
