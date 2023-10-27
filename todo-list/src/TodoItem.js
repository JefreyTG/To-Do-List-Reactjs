import React from "react";
function TodoItem({ text, completed, onToggleComplete, onRemove  }) {
    return (
        <div>
            <input type="checkbox" checked={completed} onChange={onToggleComplete} />
            <span style={{textDecoration:completed ? 'line-through' : 'none'}}>{text}</span>
            <button onClick={onRemove}>Eliminar</button>
        </div>

    );
}

export default TodoItem