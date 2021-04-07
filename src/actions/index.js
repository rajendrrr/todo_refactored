import {ADD_TODO , DELETE_TODO , COMPLETE_TODO} from './types'

export const addTodo = message => ({
    type : ADD_TODO,
    message : message
})

export const deleteTodo = id => ({
    type : DELETE_TODO,
    id : id
})

export const completeTodo = (id) => ({
    type : COMPLETE_TODO,
    id : id,
})