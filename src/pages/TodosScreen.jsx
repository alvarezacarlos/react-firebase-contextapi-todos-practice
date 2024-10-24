import React from 'react'
import TodoList from '../components/Todos'
import TodoForm from '../components/Todos/components/TodosForm'
import './TodosScreen.css'

const TodosScreen = () => {
    return (
        <div className='todos-screen'>
            <TodoForm />
            <TodoList />
        </div>
    )
}

export default TodosScreen
