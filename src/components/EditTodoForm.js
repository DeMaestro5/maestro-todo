import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {

    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
    e.preventDefault();

    editTodo(value, task.id)

    setValue('')
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' 
        placeholder='Update task' 
        value={value}
        className='todo-input'
        onChange={(e) => setValue(e.target.value)}/>
        <button className='todo-btn' type='submit'>Update task</button>
        </form>
  )
}
