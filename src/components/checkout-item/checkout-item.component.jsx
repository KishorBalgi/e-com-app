import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { removeItem } from "../../redux/cart/cart.actions";
const CheckoutItem = ({ item, removeItem }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => removeItem(item)}>
        &#10005;
      </span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
