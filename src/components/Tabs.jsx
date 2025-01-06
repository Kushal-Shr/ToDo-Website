export function Tabs(props) {
    const tabs = ['All', 'Open', 'Completed']
    const { todos, selectTab, setTab } = props
    return (
        <nav className="tab-container">

            {tabs.map((tab, tabIndex) => {
                const numOfTasks = tab === 'All' ? todos.length : tab === 'Open' ? todos.filter(val => !val.complete).length : todos.filter(val => val.complete).length
                return (
                    <button onClick={() => {
                        setTab(tab)
                    }} key = {tabIndex} className={"tab-button " + (tab === selectTab ? ' tab-selected': '')} >
                        <h4>
                            {tab} <span className="number-of-task">({numOfTasks})</span>
                        </h4>
                    </button>
                )
            })}
        </nav>
    )
}