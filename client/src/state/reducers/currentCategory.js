
const initialState = {};

export default function currentCategoryReducer(state = initialState, action) {
     switch (action.type) {
          case 'UPDATE_CURRENT_CATEGORY': {
               return {
                    ...state,
                    currentCategory: action.currentCategory
               };
          }
          default: {
              return state 
          }
               
     }
};