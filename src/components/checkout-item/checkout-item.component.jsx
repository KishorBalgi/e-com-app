import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  removeItem,
  increamentItem,
  decreamentItem,
} from "../../redux/cart/cart.actions";
const CheckoutItem = ({ item, removeItem, increamentItem, decreamentItem }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreamentItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => increamentItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => removeItem(item)}>
        &#10005;
      </span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  increamentItem: (item) => dispatch(increamentItem(item)),
  decreamentItem: (item) => dispatch(decreamentItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
