import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGSignIn, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
export default CustomButton;
