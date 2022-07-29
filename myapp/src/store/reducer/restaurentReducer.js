import restaurants from "../restaurants"
const initialState = {
    allRestaurents:[
        ...restaurants
    ],
    selectedRestaurantFoodItems:''
}
function restaurantReducer(state=initialState,action){
    if(action.type==='RESTAURANT_FOOD'){
        var selectedRestaurant = state.allRestaurents.filter((r)=>{
                            if(r.restaurant===action.payload){
                                return true
                            }
                            else{
                                return false
                            }
                        })
        // console.log("selectedRestaurant::",selectedRestaurant)
        return {...state,selectedRestaurantFoodItems:[...selectedRestaurant[0].foodItems]}
    }
    return state
}
export default restaurantReducer;