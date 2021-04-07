import React from 'react';

const Todo = ({todo , todos , text , setTodos}) => {
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return {
                    ...item , completed : !item.completed
                }
            }
            return item
        }))
    }
    const deleteHandler = () => {
        alert("are you sure you want to delete it ?")
        setTodos(todos.filter(item => item.id !== todo.id))
    }
    return ( 
        <React.Fragment>
            <div className="todo">
            <button onClick = {completeHandler} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                    {text}
                </li>
                
                <button onClick={deleteHandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </React.Fragment>
     );
}
 
export default Todo;