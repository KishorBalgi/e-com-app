import { shopTypes } from "./shop-data.types";

export const addShopData = (collections) => ({
  type: shopTypes.ADD_SHOP_DATA,
  payload: collections,
});
