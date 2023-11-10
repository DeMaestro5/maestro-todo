import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState('')

    const handleSubmit = e => {
    e.preventDefault();
    if(value.length < 1) return
    addTodo(value)
    setValue('')
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' 
        placeholder='What is the task today?' 
        value={value}
        className='todo-input'
        onChange={(e) => setValue(e.target.value)}/>
        <button className='todo-btn' type='submit'>Add Task</button>
        </form>
  )
}
