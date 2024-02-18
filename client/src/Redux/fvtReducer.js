// cartReducer.js
const initialState = {
  fvtItems: [],
};

const fvtReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FVT":
      return {
        ...state.fvtItems,
        fvtItems: [...state.fvtItems, action.item],
      };
    case "REMOVE_FROM_FVT":
      return {
        ...state,
        fvtItems: state.fvtItems.filter((item) => item.id !== action.item),
      };
    default:
      return state;
  }
};

export default fvtReducer;
