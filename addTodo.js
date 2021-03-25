function createElement(tag, className) {
    const element = document.createElement(tag)
    if (className) element.classList.add(className)

    return element
}

const addTodo = (event) => {
    const li = createElement('li')
          li.id = event.detail.id
  
          const checkbox = createElement('input')
          checkbox.type = 'checkbox'
          checkbox.checked = event.detail.complete
  
          const span = createElement('span')
          span.contentEditable = true
          span.classList.add('editable')
  
          if (event.detail.complete) {
            const strike = createElement('s')
            strike.textContent = event.detail.text
            span.append(strike)
          } else {
            span.textContent = event.detail.text
          }
  
          const deleteButton = createElement('button', 'delete')
          deleteButton.textContent = 'Delete'
          li.append(checkbox, span, deleteButton)
  
          // Append nodes
          event.detail.todoList.appendChild(li)
}

export default addTodo;