import todoReducer from './todoreducer';
import {createStore} from 'redux';
const store = createStore(todoReducer) 
export default store