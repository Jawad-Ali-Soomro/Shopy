const userIntialState = {
  user: {},
};

const userReducer = (state = userIntialState, action) => {
  switch (action.type) {
    case "ADD_USER_DETAILS":
      return {
        user: { user: action.user },
      };
    default:
      return state;
  }
};

export default userReducer;
