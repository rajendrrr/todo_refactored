import addTodo from './addTodo.js'

export class View {
    constructor() {
      this.app = this.getElement('#root')
      this.form = this.createElement('form' , 'sticky')
      this.input = this.createElement('input')
      this.input.type = 'text'
      this.input.placeholder = 'Add todo'
      this.input.name = 'todo'
      this.submitButton = this.createElement('button')
      this.submitButton.textContent = 'Submit'
      this.form.append(this.input, this.submitButton)
      this.title = this.createElement('h1')
      this.title.textContent = 'Todos'
      this.todoList = this.createElement('ul', 'todo-list')
      this.app.append(this.title, this.form, this.todoList)
  
      this._temporaryTodoText = ''
      this._initLocalListeners()
      this.todoList.addEventListener("addTodo" , addTodo)
    }
  
    get _todoText() {
      return this.input.value
    }
  
    _resetInput() {
      this.input.value = ''
    }
  
    createElement(tag, className) {
      const element = document.createElement(tag)
  
      if (className) element.classList.add(className)
  
      return element
    }
  
    getElement(selector) {
      const element = document.querySelector(selector)
  
      return element
    }
    deleteList(){
      while (this.todoList.firstChild) {
        this.todoList.removeChild(this.todoList.firstChild)
      }
    }
    showNothingToDo(){
      const p = this.createElement('p')
      p.textContent = 'Nothing to do! Add a task?'
      this.todoList.append(p)
    }
    displayTodos(todos) {
      // Delete all nodes
      this.deleteList()

      if (todos.length) {
        todos.forEach(todo => {this.todoList.dispatchEvent(new CustomEvent("addTodo",{
            detail:{
              id: todo.id,
              text: todo.text,
              complete: todo.complete,
              todoList: this.todoList
            }}))})
      }
      else{
        alert("todo can't be blank")
      }
  



    }
  
    _initLocalListeners() {
      this.todoList.addEventListener('input', event => {
        if (event.target.className === 'editable') {
          this._temporaryTodoText = event.target.innerText
        }
      })
    }
  
    subscribeAddTodo(handler) {
      this.form.addEventListener('submit', event => {
        event.preventDefault()
  
        if (this._todoText) {
          handler(this._todoText)
          this._resetInput()
        }
        else{
          alert("todo can't be blank")
        }
      })
    }
  
    subscribeDeleteTodo(handler) {
      this.todoList.addEventListener('click', event => {
        if (event.target.className === 'delete') {
          alert("are you sure ?")
          const id = parseInt(event.target.parentElement.id)
  
          handler(id)
        }
      })
    }
  
    subscribeEditTodo(handler) {
      this.todoList.addEventListener('focusout', event => {
        if (this._temporaryTodoText) {
          const id = parseInt(event.target.parentElement.id)
  
          handler(id, this._temporaryTodoText)
          this._temporaryTodoText = ''
        }
      })
    }
  
    subscribeToggleTodo(handler) {
      this.todoList.addEventListener('change', event => {
        if (event.target.type === 'checkbox') {
          const id = parseInt(event.target.parentElement.id)
  
          handler(id)
        }
      })
    }
  }
  
