// cartReducer.js
const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state.items,
        items: [...state.items, action.item],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.item),
      };
    default:
      return state;
  }
};

export default cartReducer;
