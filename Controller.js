export class Controller {
    constructor(model, view) {
      this.model = model
      this.view = view
  
      // Explicit this binding
      this.model.subscribeTodoListChanged(this.onTodoListChanged)
      this.view.subscribeAddTodo(this.handleAddTodo)
      this.view.subscribeEditTodo(this.handleEditTodo)
      this.view.subscribeDeleteTodo(this.handleDeleteTodo)
      this.view.subscribeToggleTodo(this.handleToggleTodo)
  
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
  }
  
