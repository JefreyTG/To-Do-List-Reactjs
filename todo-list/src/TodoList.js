import React from "react";
import TodoItem from "./TodoItem";

function TodoList ({ todos, toggleComplete, removeTodo }) {
    return (
        <div>
            {todos.map((todo, index) => (
                <TodoItem key={index} text={todo.text} completed={todo.completed} 
                onToggleComplete={() => toggleComplete(index)}
                onRemove={()=> removeTodo(index)}
                 />
            ))}
        </div>
    );
}

export default TodoList