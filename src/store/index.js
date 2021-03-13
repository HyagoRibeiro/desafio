import { createStore } from "redux";

const INITIAL_STATE = {
  data: [],
};

function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, data: [...state.data, action.item] };
    case "SET_CURRENT_CART":
      return { ...state, data: [...action.products] };
    default:
      return state;
  }
}

const store = createStore(cart);

export default store;
