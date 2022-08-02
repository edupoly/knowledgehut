import counterReducer from "./couter.reducer";
import {combineReducers} from 'redux';
import todoReducer from "./todo.reducer";
const reducer = combineReducers({counter:counterReducer,todo:todoReducer})
export default reducer