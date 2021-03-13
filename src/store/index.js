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
    case "REMOVE_PRODUCT":
      return {
        ...state,
        data: [...state.data.filter((_, idx) => idx !== action.index)],
      };
    default:
      return state;
  }
}

const store = createStore(cart);

export default store;
