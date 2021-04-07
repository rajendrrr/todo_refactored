import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteTodo} from '../../actions/index'
import {completeTodo} from '../../actions/index'
const TodoItem = ({task}) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        alert("are you sure you want to delete this task")
        dispatch(deleteTodo(task.id))
    }
    const handleComplete = () => {
        dispatch(completeTodo(task.id))
    }
    return (
        <div className="todo todo-list">
            <button className="complete-btn" onClick={handleComplete}><i className="fas fa-check"></i></button>
            <span className={` todo-item ${task.completed ? "completed" : ""}`}>{task.task}</span>
            <button className="trash-btn" onClick={handleDelete}><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default TodoItem
