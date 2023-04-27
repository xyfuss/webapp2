import TodoList from "./TodoList";
import React, { useState, useRef} from "react";


function App() {
  const [todos, setTodos] = useState([{id: 1, name: 'Todo 1'}])
  const todoNameRef = useRef()
  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === "") return
    setTodos(todos => [...todos, {name}])
    todoNameRef.current.value = null
  }

  
  return (
    <>
    <TodoList todos={todos}/>
    <input ref={todoNameRef}type="text"></input>
    <button onClick={handleAddTodo}>Add todo</button>
    <div>0 left to do</div>
    </>
    
  )
    
}

export default App;
