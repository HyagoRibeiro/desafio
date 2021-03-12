import { createStore } from "redux";

const products = JSON.parse(localStorage.getItem("productsList"));

const INITIAL_STATE = {
  data: products ? products : [],
};

function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, data: [...state.data, action.item] };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        data: [...state.data.filter((item) => item.id !== action.item.id)],
      };
    default:
      return state;
  }
}

const store = createStore(cart);

export default store;
