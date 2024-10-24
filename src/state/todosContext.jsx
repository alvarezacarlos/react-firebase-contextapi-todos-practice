import { createContext, useContext, useState } from "react";

import { fetchAllTodosReq, fetchTodoByIdReq, createTodoReq, updateTodoReq, deleteTodoReq } from "../api/todos.api";


export const TodosContext = createContext();


// return the context
export const useTodos = () => {
    const context = useContext(TodosContext);
    if (context === undefined) {
        throw new Error("useContext must be used within a TaskContextProvider");
    }
    return context;
};


// context provider
export const TodosContextProvider = ({ children }) => {

    const [todos, setTodos] = useState([]);

    const fetchAllTodos = async () => {
        const response = await fetchAllTodosReq();
        const resTodos = []
        for (const _id in response.data) {
            const resTodo = {
                _id: _id,
                ...response.data[_id]
            }
            resTodos.push(resTodo)
        }
        setTodos(resTodos)
    }

    const createTodo = async (todo) => {
        try {
            await createTodoReq(todo);
            setTodos([...todos, todo]);
        } catch (error) {
            console.error(error);
        }
    };

    const updateTodo = async (_id, newTodo) => {
        try {           
            await updateTodoReq(_id, newTodo);
        } catch (error) {
            console.error(error);
        }
    };


    const deleteTodo = async (_id) => {
        try {           
            await deleteTodoReq(_id);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchTodosById = async (id) => {
        try {
            const response = await fetchTodoByIdReq(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <TodosContext.Provider
            value={{
                todos,
                fetchAllTodos,
                fetchTodosById,
                createTodo,
                updateTodo,
                deleteTodo
            }}
        >
            {children}
        </TodosContext.Provider>
    );
};