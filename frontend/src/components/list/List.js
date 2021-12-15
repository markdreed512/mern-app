import { useState } from "react";
import { uid } from "uid";
import "./List.css";

function List() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  async function handleSubmit(e){
    e.preventDefault();
    if (todo) {
      let date = new Date();
      let newTodo = {
        id: uid(),
        text: todo,
        done: false,
        date: `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`,
      };
      setTodos([...todos, newTodo]);
      
      const response = await fetch('http://localhost:8080/api/add', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newTodo)
      })

      const data = await response.json()

      console.log(data)
      setTodo("");
    }
  };
  const handleCheck = (e) => {
    let newTodos = todos.map((todo) => {
      return todo.id === e.target.id
        ? { id: todo.id, text: todo.text, done: !todo.done }
        : todo;
    });
    setTodos(newTodos);
  };
  const deleteTodo = (e) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== e.target.id;
      })
    );
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={todo}
          placeholder="Enter Todo"
        />
        <input type="submit" value="ADD" />
      </form>
      <ul className="todos">
        {todos.map((todo, i) => {
          return (
            <li key={todo.id} className={todo.done ? "strike" : "no-strike"}>
              <span>
                <input
                  type="checkbox"
                  id={todo.id}
                  checked={todo.done}
                  onChange={handleCheck}
                />
                {todo.text}
              </span>
              <span>
                <span className="date">{todo.date}</span>
                <button className="delete" onClick={deleteTodo} id={todo.id}>
                  Delete
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
