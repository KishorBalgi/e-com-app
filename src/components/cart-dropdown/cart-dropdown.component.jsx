import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <h1>
          {item.name} and {item.quantity}'s
        </h1>
      ))}
    </div>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});
export default connect(mapStateToProps)(CartDropdown);
