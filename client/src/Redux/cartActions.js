// cartActions.js
export const addToCart = ({ name, description, image, price, id }) => ({
  type: "ADD_TO_CART",
  item: {
    id: id,
    name: name,
    description: description,
    image: image,
    price: price,
  },
});

export const removeFromCart = ({ itemId }) => ({
  type: "REMOVE_FROM_CART",
  item: itemId,
});

export const addUserDetails = ({ username, email, phone, avatar, id }) => ({
  type: "ADD_USER_DETAILS",
  user: {
    username,
    email,
    phone,
    avatar,
    id,
  },
});

export const addTofvt = ({ name, description, image, price, id }) => ({
  type: "ADD_TO_FVT",
  item: {
    id: id,
    name: name,
    description: description,
    image: image,
    price: price,
  },
});

export const removeFromFvt = ({ itemId }) => ({
  type: "REMOVE_FROM_CART",
  item: itemId,
});

export const addProducts = ({ name, description, image, price, id }) => ({
  type: "ADD_PRODUCTS",
  item: {
    id: id,
    name: name,
    description: description,
    image: image,
    price: price,
  },
});
