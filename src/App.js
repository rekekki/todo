import React, { useState } from "react"
import TodoList from "./components/TodoList"

const App = () => {
  const [todos, setTodos] = useState(["Todo 1", "Todo 2"])
  return (
    <div>
      <TodoList todos={todos} />
      <input type="text"></input>
      <button>
        Add Todo
      </button>
      <button>
        Clear completed
      </button>
      <div>
        0 left to do
      </div>
    </div>
  )
}

export default App