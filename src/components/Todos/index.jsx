import React, { useEffect } from 'react'

import TodoItem from './components/TodoItem'

import { useTodos } from '../../state/todosContext'

import './Todos.css'

const TodosList = () => {

    const { todos, fetchAllTodos } = useTodos()

    useEffect(() => {
        fetchAllTodos()
    }, [fetchAllTodos])

    return (
        <div className='todos-list'>
            {
                todos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} />
                ))
            }
        </div>
    )
}

export default TodosList