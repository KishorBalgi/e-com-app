import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGSignIn, ...otherProps }) => (
  <button
    className={`${isGSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
export default CustomButton;
