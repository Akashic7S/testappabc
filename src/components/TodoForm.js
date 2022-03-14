import React, { useState } from 'react'

const TodoForm = ({ addTodo, edit }) => {
  const [text, setText] = useState(edit ? edit : '');

  console.log(text)

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  }

  return (
    <form onSubmit={onSubmit} style={{ height: '60px', width: '400px', background: 'lightblue', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <label>Add Todos</label>
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
