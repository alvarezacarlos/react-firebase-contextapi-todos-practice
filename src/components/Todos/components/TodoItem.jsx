import React from 'react'
import Button from '../../../share/Button'

import { useTodos } from '../../../state/todosContext'

import './TodoItem.css'

const TodoItem = ({ todo }) => {

    const { updateTodo, deleteTodo } = useTodos()

    const updateTodoHandler = () => {
        updateTodo(todo._id, {
            ...todo,
            isDone: !todo.isDone
        })
    }

    const deleteTodoHandler = () => {
        deleteTodo(todo._id)
    }

    return (
        // <Card>
        <div className='todo'>
            <p>{todo.description}</p>
            <div className='btn-container'>
                <Button clickHandler={updateTodoHandler} title={todo.isDone ? 'Re-open Task' : 'Close Task'} actionType={todo.isDone ? 'reopen' : 'close'} />   
                <Button clickHandler={deleteTodoHandler} title='Delete' actionType='delete'/>
            </div>
        </div>
        // </Card>
    )
}

export default TodoItem