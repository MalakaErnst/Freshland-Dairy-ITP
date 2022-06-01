import { combineReducers } from "redux";
import shopReducer from './shoping/shopping-reducer'

const rootReducer = combineReducers({
    shop: shopReducer,
});

export default rootReducer