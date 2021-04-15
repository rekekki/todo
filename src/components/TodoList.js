import React from "react"

const TodoList = ({ todos }) => {
    return (
        <div>
            <h2>Hello List</h2>
            {todos.length}
        </div>
    )
}

export default TodoList