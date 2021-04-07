import React , {useState} from 'react';
const Form = ({todos , setTodos , status , setStatus}) => {
    const [inputText , setInputText] = useState('')
    const inputHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        if(inputText.length === 0){
            alert("task can't be blank")
        }
        else{
            setTodos([...todos , {
                text : inputText,
                completed : false,
                id : new Date().getTime()
            }])
        }
        setInputText('')
    }
    const DeleteAllTodos = (e) => {
        e.preventDefault()
        alert("are you sure you want to delete all the tasks ? ")
        setTodos([])
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return ( 
        <React.Fragment>
            <form className="sticky">   
            <input placeholder="Add a todo" value={inputText} onChange={inputHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <button onClick={DeleteAllTodos} className="trash-list-btn">
                <i className="fas fa-trash"></i>
            </button>
            <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
            </div>
            </form>
        </React.Fragment>
     );
}
 
export default Form;