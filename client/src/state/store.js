//this might go at the top of the file instead try moving it if it does not work 
import { createStore } from "redux";

const preloadedState = {
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
    products: [],
  };
  
  function reducer(state = preloadedState, action) {
    switch (action.type) {
      case "TOGGLE_CART":
        return {
          cartOpen: !state.cartOpen,
        };
      case "ADD_TO_CART":
        return {
          ...state,
          cartOpen: true,
          cart: [...state.cart, action.product],
        };
      case "ADD_MULTIPLE_TO_CART":
        return {
          ...state,
          cart: [state.cart, ...action.products],
        };
      case "UPDATE_CART_QUANTITY":
        return {
          ...state,
          cartOpen: true,
          cart: state.cart.map((product) => {
            if (action._id === product._id) {
              product.purchaseQuantity = action.purchaseQuantity;
            }
            return product;
          }),
        };
      case "REMOVE_FROM_CART":
        let newState = state.cart.filter((product) => {
          return product._id !== action._id;
        });
  
        return {
          ...state,
          cartOpen: newState.length > 0,
          cart: newState,
        };
      case "CLEAR_CART":
        return {
          ...state,
          cartOpen: false,
          cart: [],
        };
      case "UPDATE_CATEGORIES": {
        return {
          ...state,
          categories: [...action.categories],
        };
      }
      case "UPDATE_CURRENT_CATEGORY": {
        return {
          ...state,
          currentCategory: action.currentCategory,
        };
      }
  
      case "UPDATE_PRODUCTS": {
        return {
          ...state,
          products: [...action.products],
        };
      }
  
      default: {
        return state;
      }
    }
  }


  const store = createStore(rootReducer, preloadedState);

  export default store;