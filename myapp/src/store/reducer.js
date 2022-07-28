//state
const initialState = {
    count:1
}

//action
function reducer(state=initialState,action){
    if(action.type==='INC'){
        return {count:state.count+1}
    }
    if(action.type==='DEC'){
        return {count:state.count-1}
    }
    if(action.type==='RESET'){
        return {count:initialState.count}
    }
    return state
}
export default reducer;