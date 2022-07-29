const initialState = {
    todos:[
        'goto gym',
        'veggies',
        'cycling'
    ]
}
function todoReducer(state=initialState,action){
    if(action.type==='ADDTODO'){
        return {todos:[...state.todos,action.payload]}
    }
    return {...state}
}
export default todoReducer