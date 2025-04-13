import { memo, useState } from "react";

const TodoItem = memo(
    ({ todo, makeDone, deleteTodo, makeNotDone, editTodo }) => {
        const [isEditable, setIsEditable] = useState(false);
        const [newText, setNewText] = useState(todo.text);

        const handleTextChange = (e) => {
            if (!isEditable) return;
            setNewText(e.currentTarget.value);
        };

        return (
            <div className="text-gray-950 bg-gray-300 border-2 w-full h-16 px-4 flex items-center rounded-md gap-2">
                <input
                    disabled={!isEditable}
                    value={newText}
                    onChange={handleTextChange}
                    className={`w-full outline-none border-none ${
                        todo.isDone ? "line-through" : ""
                    } `}
                />
                {isEditable ? (
                    <div
                        className="p-2 bg-blue-400 rounded-full"
                        onClick={() => {
                            editTodo(todo.id, newText);
                            setIsEditable(false);
                        }}
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M7 19V13H17V19H19V7.82843L16.1716 5H5V19H7ZM4 3H17L21 7V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM9 15V19H15V15H9Z"></path>
                        </svg>
                    </div>
                ) : (
                    <>
                        {todo.isDone ? (
                            <div
                                className="p-2 mr-2 bg-gray-400 rounded-full"
                                onClick={() => makeNotDone(todo.id)}
                            >
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                                </svg>
                            </div>
                        ) : (
                            <div
                                className="p-2 mr-2 bg-green-400 rounded-full"
                                onClick={() => makeDone(todo.id)}
                            >
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path>
                                </svg>
                            </div>
                        )}

                        {!todo.isDone && (
                            <div
                                className="p-2 mr-2 bg-yellow-400 rounded-full"
                                onClick={() => setIsEditable(true)}
                            >
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M6.41421 15.89L16.5563 5.74785L15.1421 4.33363L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6473L14.435 2.21231C14.8256 1.82179 15.4587 1.82179 15.8492 2.21231L18.6777 5.04074C19.0682 5.43126 19.0682 6.06443 18.6777 6.45495L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z"></path>
                                </svg>
                            </div>
                        )}

                        <div
                            className="p-2 bg-red-400 rounded-full"
                            onClick={() => deleteTodo(todo.id)}
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                            </svg>
                        </div>
                    </>
                )}
            </div>
        );
    }
);

export default TodoItem;
