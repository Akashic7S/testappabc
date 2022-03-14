import React, { useState } from 'react'

const TodoForm = ({ edit, updateTodo, setEdit }) => {
  const [text, setText] = useState(edit.task);

  console.log(text)

  const onSubmit = (e) => {
    e.preventDefault();
    updateTodo({ id: edit.id, task: text, complete: edit.complete });
    setText('');
    setEdit({ id: '', task: '', complete: false })
  }

  return (
    <form onSubmit={onSubmit} style={{ height: '60px', width: '400px', background: 'lightblue', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <label>Edit Todo</label>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input type='submit' />
    </form>
  )


}

export default TodoForm
