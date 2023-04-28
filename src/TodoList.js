import React from 'react';
import { useState } from 'react';

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id:1,text:"Todo 1",completed: false},
        {id:2,text:"Todo 2",completed: false}
      ]);
      const [newTodoText, setNewTodoText] = useState('');
      const handleCheckboxChange = (todo) => {
        const updatedTodos = todos.filter(t => t.id !== todo.id);
        setTodos(updatedTodos);
      }
      const handleNewTodoInputChange = (event) => {
        setNewTodoText(event.target.value);
      };
      const handleAddTodoClick = () => {
        const newTodo = {id: Date.now(), text: newTodoText, completed: false};
        setTodos([...todos,newTodo]);
        setNewTodoText('');
      }
  return (
    <div>
      <ul>
        {todos.map(todo =>(
          <li key={todo.id}>
              <input type="checkbox" checked={todo.completed} onChange={() => handleCheckboxChange(todo)} />
              <span>{todo.text}</span>
          </li>
        ))}
      </ul>
      <div>
      <input type="text" value={newTodoText} onChange={handleNewTodoInputChange}/>
      <button onClick={handleAddTodoClick}>Add Todo</button>
      </div>
    </div>
  )
}
