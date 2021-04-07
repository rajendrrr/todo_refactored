import React , {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../../actions/index'
import cuid from 'cuid'
const AddTodo = () => {
    const dispatch = useDispatch()
    const [tasks , setTasks] = useState('')
    const handleInputChange = (e) => {
        setTasks(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(tasks.length === 0){
            alert("todo can't be blank")
        }
        else{setTasks(dispatch(addTodo({
            task : tasks,
            id : cuid(),
            completed : false
        })))}
        setTasks("")
    }
    return (
        
            <form className="sticky">
                <input value={tasks} className="todo-input" type="text" name="userInput" onChange = {(e) => handleInputChange(e)}/>
                <button className="fas fa-plus-square todo-btn"  onClick = {handleSubmit}></button>
            </form>
        
    )
}

export default AddTodo
