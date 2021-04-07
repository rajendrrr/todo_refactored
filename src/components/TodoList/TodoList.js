import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import {useSelector} from 'react-redux'
const TodoList = () => {
    const taskobj = useSelector((state) => state.todos.data)
    const taskitems = taskobj.map((task) => {
        return <div className="todo-container"><TodoItem task = {task} key={task.id} /></div>
    })
    return (
        <div>
            {taskitems}
        </div>
    )
}

export default TodoList
