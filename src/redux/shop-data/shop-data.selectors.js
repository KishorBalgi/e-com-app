import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.collection
);

export const selectCollectionsForPreview = createSelector(
  [selectShopData],
  (collection) =>
    collection ? Object.keys(collection).map((key) => collection[key]) : []
);
export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopData], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
