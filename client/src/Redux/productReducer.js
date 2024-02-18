// cartReducer.js
const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state.items,
        items: [...state.items, action.item],
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.item),
      };
    default:
      return state;
  }
};

export default productReducer;
