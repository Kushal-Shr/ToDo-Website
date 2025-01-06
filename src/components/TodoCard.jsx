export function TodoCard(props) {
    const { todo, handleDeleteTodo, todoIndex, handleDoneTodo } = props
    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-button">
                <button disabled={todo.complete} onClick={() => {
                    handleDoneTodo(todoIndex)
                }}>
                    Done
                </button>
                <button onClick={() => {
                    handleDeleteTodo(todoIndex)
                }}>
                    Delete
                </button>
            </div>
        </div>
    )
}