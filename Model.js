export class Model {
    constructor() {
      this.todos = []
    }
  
    subscribeTodoListChanged(callback) {
      this.onTodoListChanged = callback
    }
    //unsubsribe todo list
    
    _commit(todos) {
      this.onTodoListChanged(todos)
      
    }
  
    addTodo(todoText) {
      const length = this.todos.length
      const todo = {
        id: new Date().getTime(),
        text: todoText,
        complete: false,
      }
      
      this.todos.push(todo)
  
      this._commit(this.todos)
    }
  
    editTodo(id, updatedText) {
      this.todos = this.todos.map(todo =>
        todo.id === id ? { id: todo.id, text: updatedText, complete: todo.complete } : todo
      )
  
      this._commit(this.todos)
    }
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
  
      this._commit(this.todos)
      
    }
  
    toggleTodo(id) {
      this.todos = this.todos.map(todo =>
        todo.id === id ? { id: todo.id, text: todo.text, complete: !todo.complete } : todo
      )
  
      this._commit(this.todos)
    }

    // colorChange(){
    //   console.log(5)
    // }
    unsubscribeTodo(){
      this.todos = [];
      
    }
  }  
