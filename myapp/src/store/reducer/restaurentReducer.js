import restaurants from "../restaurants"
const initialState = {
    allRestaurents:[
        ...restaurants
    ]
}
function restaurantReducer(state=initialState,action){
    return state
}
export default restaurantReducer;