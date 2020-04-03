import React from 'react';
import './App.css';
import Todo from "./components/Todo";

function App() {
  return (
    <div className="todo-list">
       <Todo/>
      <Todo/>
      <Todo/>
      <Todo/>
      <Todo/>
    </div>
  );
}

export default App;
