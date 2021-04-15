import React, { useState } from "react"
import TodoList from "./components/TodoList"

const App = () => {
  useState()
  return (
    <div>
      <TodoList />
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