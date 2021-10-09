export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const decreamentItem = (cartItems, itemToDecreament) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToDecreament.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToDecreament.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === itemToDecreament.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
export const increamentItem = (cartItems, itemToIncreament) => {
  return cartItems.map((cartItem) =>
    cartItem.id === itemToIncreament.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};
