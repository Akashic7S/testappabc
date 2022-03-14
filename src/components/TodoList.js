import React, { useState } from 'react'
import EditTodoForm from './EditTodoForm';

const TodoList = ({ todos, deleteTodo, markTodo, updateTodo }) => {
  const [edit, setEdit] = useState({ id: '', task: '', complete: false });

  if (edit.id) {
    return <EditTodoForm updateTodo={updateTodo} edit={edit} setEdit={setEdit} />
  }

  return (
    <div style={{ height: '700px', width: '500px', background: 'lightgrey', display: 'flex', flexDirection: 'column' }}>
      {todos.map((todo) => (
        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', }} key={todo.id}>
          <span style={{ width: '10px', marginRight: '20px' }}>
            <input
              type='checkbox'
              checked={todo.complete}
              onClick={() => markTodo(todo.id)}
            />
          </span>

          <span style={{ width: '300px' }}>
            {todo.task}
          </span>

          <span style={{ width: '300px' }}>
            <button onClick={() => deleteTodo(todo.id)}>Delete Todo</button>
            <button onClick={() => setEdit({ id: todo.id, task: todo.task, complete: todo.complete })}>Update Todo</button>
          </span>

        </div>
      ))}
    </div>
  )
}

export default TodoList
