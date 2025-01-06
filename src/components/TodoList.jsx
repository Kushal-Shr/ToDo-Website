import { TodoCard } from "./TodoCard"

export function TodoList(props) {
    const { todos, selectTab, handleDeleteTodo, handleDoneTodo } = props
    const tab = selectTab
    const tabfilter = tab === 'All' ? todos : tab === 'Open' ? todos.filter(val => !val.complete) : todos.filter(val => val.complete)
    return (
        <>
            {tabfilter.map((todo, todoIndex) => {
                return (
                    <TodoCard key = {todoIndex} todo = {todo} todoIndex = {todoIndex} handleDeleteTodo = {handleDeleteTodo} handleDoneTodo = {handleDoneTodo} />
                )
            })}
        </>
    )
}