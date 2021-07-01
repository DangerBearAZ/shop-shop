const initialState = {};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_PRODUCTS": {
      return {
        ...state,
        products: [...action.products],
      };
    }
    default:
      return state;
  }
}