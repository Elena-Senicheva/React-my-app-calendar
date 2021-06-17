import React, { useState, useEffect, useReducer, useContext } from 'react'
import TodoList from './TodoList'
import styles from './styles.css'
import { v4 as uuidv4 } from 'uuid'

function ToDo () {
  const [todos, setTodos] = useState([])

  const [todoTitle, setTodoTitle] = useState('')

  const addTodo = event => {
    if (event.key === 'Enter') {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          title: todoTitle,
          completed: false
        }
      ])

      setTodoTitle('')
    }
  }

   const removeTodo = id => {
    setTodos(
      todos.filter(todo => {
        return todo.id !== id
       })
     )
   }

  return (
    <div className='container'>
      <h1>Todo list</h1>
      <div className='input-field'>
        <input
          type='text'
          value={todoTitle}
          onChange={event => setTodoTitle(event.target.value)}
          onKeyPress={addTodo}
        />
        <label>Todo</label>
      </div>

      <TodoList todos={todos} />
    </div>
  )
}

export default ToDo
