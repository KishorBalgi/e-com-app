import React from "react";
import "./header.styles.scss";
import {
  OptionsContainer,
  HeaderContainer,
  LogoContainer,
  OptionsLink,
  OptionsDiv,
} from "./header.styles";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../resources/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo></Logo>
    </LogoContainer>
    <OptionsContainer className="options">
      <OptionsLink to="/shop">SHOP</OptionsLink>
      <OptionsLink to="/shop">CONTACT</OptionsLink>
      {currentUser ? (
        <OptionsDiv onClick={() => auth.signOut()}>SIGN OUT</OptionsDiv>
      ) : (
        <OptionsLink to="/signin">SIGN IN</OptionsLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
