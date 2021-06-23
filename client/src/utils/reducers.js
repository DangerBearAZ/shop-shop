//this might go at the top of the file instead try moving it if it does not work 
import { useReducer } from 'react';

import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from "./actions";

export const reducer = (state, action) => {

    switch (action.type) {
        //if action type value is the value of 'UPDATE_PRODUCTS', return a new state object with an updated products array.
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };
        /// // if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
        case UPDATE_CATEGORIES:
            return {
                ...state, categories: [...action.categories]
            };
        // updating the state of UPDATE_CURRENT_CATEGORY to a new string value instead of an array. 
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };
        // if it's none of these actions, do not update state at all and keep things the same! 
        default:
            return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}