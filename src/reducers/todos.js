const initialState = {
    data : []
}
const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const COMPLETE_TODO = 'COMPLETE_TODO'
const todos = (state = initialState , action) => {
    switch(action.type){
        case ADD_TODO : 
            return {
                ...state , 
                data : [...state.data , action.message]
            }
        case DELETE_TODO : 
            return {
                ...state,
                data : [...state.data.filter((todo) => todo.id !== action.id)],
            }
        case COMPLETE_TODO : 
            return {
                ...state,
                data : [...state.data.map(item => {
                    if(item.id === action.id){
                        return {
                            ...item , completed : !item.completed
                        }
                    }
                    return item
                })]
            }
        default : 
            return state
    }
}

export default todos;