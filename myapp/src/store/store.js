import restaurantReducer from "./reducer/restaurentReducer";
import {createStore} from 'redux';
const store = createStore(restaurantReducer)
export default store;