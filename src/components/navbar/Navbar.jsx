import React from "react";
import LoginButton from "../buttons/LoginButton";
import RegisterButton from "../buttons/RegisterButton";
import { StyledNavbar } from "../styles/Navbar.styled";

const Navbar = () => (
  <StyledNavbar>
    <div>
      <span className="logo">Bike Share</span>
      <div className="navItems">
        <RegisterButton />
        <LoginButton />
      </div>
    </div>
  </StyledNavbar>
);

export default Navbar;
