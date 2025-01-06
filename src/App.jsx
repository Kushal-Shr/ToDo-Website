import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"

import { useState, useEffect } from 'react'

function App() {

  const [todos, setTodos] = useState([{input: 'Eat BreakFast!', complete: true }])
  const [selectTab, setTab] = useState('All')

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDoneTodo(index) {
    let newTodoList = [...todos]
    newTodoList.filter((val, valIndex) => {
      if (valIndex === index)
      {
        val.complete = true
      }
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currentTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) {
      return
    }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  return (
    <>

      <Header todos = {todos} />
      <Tabs todos = {todos} selectTab = {selectTab} setTab = {setTab} />
      <TodoList todos = {todos} selectTab = {selectTab} handleDeleteTodo = {handleDeleteTodo} handleDoneTodo = {handleDoneTodo} />
      <TodoInput handleAddTodo = {handleAddTodo} />

    </>
  )

}

export default App
