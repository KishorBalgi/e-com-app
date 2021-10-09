import { cartTypes } from "./cart.types";
export const toggleCartHidden = () => ({
  type: cartTypes.TOGGLE_CART_HIDDEN,
});
export const addItem = (item) => ({
  type: cartTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const increamentItem = (item) => ({
  type: cartTypes.INCREAMENT_ITEM,
  payload: item,
});
export const decreamentItem = (item) => ({
  type: cartTypes.DECREAMENT_ITEM,
  payload: item,
});
