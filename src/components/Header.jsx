export function Header(props) {
    const {todos} = props
    const todoLength = todos.length
    const tasksPlural = todoLength != 1
    return (
        <header>
            <h1 className="title">
                | You have {todoLength} open {
                    tasksPlural ? 'tasks': 'task'
                }. |
            </h1>
        </header>
    )
}