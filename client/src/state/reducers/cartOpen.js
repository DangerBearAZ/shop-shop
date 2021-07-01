const initialState = {};

export default function cartOpenReducer(state = initialState, action) {
     //look at the action that happened and determine how to update status

     switch (action.type) {
          case 'TOGGLE_CART':
               return{
                    cartOpen: !state.cartOpen
          }

          default:
               return{
                    ...state
               };     
     }
}