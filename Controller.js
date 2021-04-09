export class Controller {
    constructor(model, view) {
      this.model = model
      this.view = view
  
      // Explicit this binding
      // const arrAdd = [this.handleAddTodo , this.handleColorChange]
      this.model.subscribeTodoListChanged(this.onTodoListChanged)
      this.view.subscribeAddTodo(this.handleAddTodo)
      // this.view.subscribeAddTodo(arrAdd)
      this.view.subscribeEditTodo(this.handleEditTodo)
      this.view.subscribeDeleteTodo(this.handleDeleteTodo)
      this.view.subscribeToggleTodo(this.handleToggleTodo)
      this.view.unsubscribeList(this.unsubscribeAll)
      // Display initial todos
      this.onTodoListChanged(this.model.todos)
    }
  
    onTodoListChanged = todos => {
      this.view.displayTodos(todos)
    }
  
    handleAddTodo = todoText => {
      this.model.addTodo(todoText)
    }
  
    handleEditTodo = (id, todoText) => {
      this.model.editTodo(id, todoText)
    }
  
    handleDeleteTodo = id => {
      this.model.deleteTodo(id)
    }
  
    handleToggleTodo = id => {
      this.model.toggleTodo(id)
    }
    // handleColorChange = () => {
    //   this.model.colorChange()
    // }
    unsubscribeAll = () => {
      this.model.unsubscribeTodo()
    }
  }
  
