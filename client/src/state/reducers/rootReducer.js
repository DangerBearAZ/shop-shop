//this is my index  

import { combineReducers } from "redux";


import cartReducer from "./cart";
import productReducer from "./product";
import categoryReducer from "./category";
import cartOpenReducer from './cartOpen';
import currentCategoryReducer from './currentCategory';

 
const rootReducer = combineReducers({
    cartReducer,
    cartOpenReducer,
    productReducer, 
    categoryReducer,
    currentCategoryReducer
});

export default rootReducer;