import React, { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([{ id: 1, task: 'Study React', complete: false }, { id: 2, task: 'Do algo challenges JS and SQL', complete: false }]);



  const addTodo = (text) => {
    setTodos([{ id: todos.length + 1, task: text, complete: false }, ...todos])
  }

  const deleteTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  const updateTodo = (item) => {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id == item.id) {
        todo = item;
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const markTodo = (id) => {
    /* let updatedTodos = [...todos].map((todo) => {
       if (todo.id == id) {
         todo.complete = !todo.complete
       }
       return todo
     })
     setTodos(updatedTodos) */

    setTodos(prev => prev.map((todo) => {
      if (todo.id == id) {
        todo.complete = !todo.complete
      }
      return todo
    }))
  }

  console.log(todos, 'todos State changed')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} markTodo={markTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default App
