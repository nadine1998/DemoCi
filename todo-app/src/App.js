import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch the to-do items from the Flask API
  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);
  return (

    <div className="App">
      <h1>To-Do List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "(Completed)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );

}

export default App;
