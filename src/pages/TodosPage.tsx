import React, {useEffect, useState} from "react";
import {ITodo} from "../interfaces";
import {ToDoForm} from "../components/ToDoForm";
import {ToDoList} from "../components/ToDoList";

declare var confirm: (question: string) => boolean;

const TodosPage:React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("todos") || '[]') as ITodo[]

        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newToDo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        setTodos(prev => [newToDo, ...prev]);
    }

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }

            return todo
        }))
    }

    const removeHandler = (id: number) => {
        const shouldRemove = confirm('Вы уверены, что хотите удалить элемент?')
        if (shouldRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    }

    return (
        <>
            <ToDoForm onAdd={addHandler}/>
            <ToDoList
                todos={todos}
                onToggle={toggleHandler}
                onRemove={removeHandler}
            />
        </>
    );
};

export default TodosPage;