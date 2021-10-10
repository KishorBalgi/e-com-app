import { shopTypes } from "./shop-data.types";
const INITIAL_STATE = {
  collection: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopTypes.ADD_SHOP_DATA:
      return {
        ...state,
        collection: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
