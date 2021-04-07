import './App.css';
import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList';
function App() {
  
  const [todos , setTodos] = useState([])
  const [status , setStatus] = useState('all')
  const [filteredTodos , setFilteredTodos] = useState([])
  useEffect( () => {
    switch(status){
      case "completed" : 
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      case "uncompleted" : 
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        
        break
      default : 
        setFilteredTodos(todos)
        break
    }
  } , [todos , status]);
  
  
  return (
    <React.Fragment>
        <header>
          <h2>
            Write Your today's tasks
          </h2>
        </header>
        <Form 
            
            todos = {todos}
            setTodos = {setTodos}
            status = {status}
            setStatus = {setStatus}
        />
        <TodoList 
          todos = {todos}
          setTodos = {setTodos}
          filteredTodos = {filteredTodos}
          setFilteredTodos = {setFilteredTodos}
        />
        
    </React.Fragment>
  );
}

export default App;
