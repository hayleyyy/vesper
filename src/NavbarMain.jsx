import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import logo from "./assets/logo-dk.png";

const NavbarMain = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="site-nav">
        <Navbar light expand="md" className="navbar-main">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavItem>
                <NavLink href="#gallery">Illustration</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#gallery">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
    </>
  );
};

export default NavbarMain;
