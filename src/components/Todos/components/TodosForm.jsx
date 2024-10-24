import React, { useState } from 'react'
import Card from '../../../share/Card'

import { v4 as uid } from 'uuid';

import { useTodos } from '../../../state/todosContext'

import './TodosForm.css'

const TodosForm = () => {

  const { createTodo } = useTodos()

  const [todo, setTodo] = useState({
    description: ''
  })

  const onChangeHandler = (e) => {
    // console.log(e.target.value)
    setTodo({ ...todo, [e.target.name]: e.target.value })
    // console.log(todo)
  }

  const clearForm = e => { 
    e.target.querySelector('#description').value = ''
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    todo.description.trim().length !== 0 && createTodo({
      id: uid(),
      description: todo.description,
      isDone: false
    })

    clearForm(e)
  }

  return (

    <form className='form' onSubmit={onSubmitHandler}>
      <div className='label-button-container'>
        <label className='label' htmlFor='description'>New Todo</label>
        <button className='create-todo-bttn' type='submit'>Create</button>
      </div>
      <textarea className='textarea' type='textarea' id='description' name='description' rows='3' onChange={onChangeHandler}></textarea>
    </form>

  )
}

export default TodosForm