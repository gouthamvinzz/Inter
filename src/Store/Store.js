import Reducer from './../Reducer/Reducer';
import {combineReducers , createStore} from 'redux';

// const AppReducer = combineReducers({
//     Reducer
// })

// const rootReducer = (state,action)=>{
//     return AppReducer(state,action);
// }

const Store = createStore(Reducer);

export default Store;