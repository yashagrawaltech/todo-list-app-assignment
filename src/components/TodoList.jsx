import React, { useEffect, useLayoutEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";

// const MockTodos = [
//     {
//         id: "1",
//         text: "this is a todo",
//         isDone: false,
//     },
//     {
//         id: "2",
//         text: "this is a todo",
//         isDone: true,
//     },
//     {
//         id: "3",
//         text: "this is a todo",
//         isDone: false,
//     },
//     {
//         id: "4",
//         text: "this is a todo",
//         isDone: false,
//     },
// ];

const TodoList = () => {
    const [todoInputValue, setTodoInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    useLayoutEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        if (savedTodos.length) {
            setTodos(savedTodos);
        }
    }, []);

    const deleteTodo = (id) => {
        const newTodoList = todos.filter((f) => f.id !== id);
        setTodos(newTodoList);
    };

    const makeDone = (id) => {
        const newTodoList = todos.map((t) =>
            t.id === id ? { ...t, isDone: true } : t
        );
        setTodos(newTodoList);
    };

    const makeNotDone = (id) => {
        const newTodoList = todos.map((t) =>
            t.id === id ? { ...t, isDone: false } : t
        );
        setTodos(newTodoList);
    };

    const editTodo = (id, newTodo) => {
        const newTodoList = todos.map((t) => {
            t.id === id ? (t.text = newTodo) : null;
            return t;
        });
        setTodos(newTodoList);
    };

    const addTodo = (e) => {
        e.preventDefault();

        if (!todoInputValue.trim()) return;

        const newTodo = {
            id: uuidv4(),
            text: todoInputValue.trim(),
            isDone: false,
        };

        setTodos((p) => [...p, newTodo]);
        setTodoInputValue("");
    };

    useEffect(() => {
        localStorage.setItem(
            "todos",
            JSON.stringify(todos.length ? todos : [])
        );
    }, [todos]);

    return (
        <div className="w-full md:w-[80%] overflow-clip">
            <form
                className="w-full flex flex-col md:flex-row items-center justify-center gap-4 bg-gray-200 pt-4 pb-4 px-4 sticky top-0"
                onSubmit={addTodo}
            >
                <input
                    className="w-full px-4 h-16 outline-none border-2 rounded-md"
                    type="text"
                    id="todo-input"
                    value={todoInputValue}
                    onChange={(e) => setTodoInputValue(e.currentTarget.value)}
                    placeholder="want to learn react.js today"
                />
                <button
                    className="px-4 h-16 w-full md:w-fit bg-gray-900 text-white rounded-md flex items-center justify-center gap-2 text-nowrap"
                    type="submit"
                >
                    <svg
                        className="w-8 h-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                    </svg>
                    Add Todo
                </button>
            </form>

            <div className="todos px-4 flex flex-col gap-4 pb-4 mt-4">
                {todos && todos.length
                    ? todos.map((t) => (
                          <TodoItem
                              key={t.id}
                              todo={t}
                              deleteTodo={deleteTodo}
                              makeDone={makeDone}
                              makeNotDone={makeNotDone}
                              editTodo={editTodo}
                          />
                      ))
                    : null}
            </div>
        </div>
    );
};

export default TodoList;
