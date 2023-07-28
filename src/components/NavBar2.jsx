import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import aLogo from "../pictures/icons/brandImage.svg"

function NavBar2(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" dark>
        {/* want to make navbar different on desktop and mobile */}
        <NavbarBrand href="/" className="me-auto">
        <img
        alt="logo"
        src={aLogo}
        style={{
          height: 40,
          width: 40
        }}
      />
          
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/alexander-cheng-90368255/">Linkedin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/AlexanderCheng-91">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Blog</NavLink>
              {/* I want this to take me to the page where the blogs live */}
              {/* add blogs:
              Microsoft
              Fishtank
              Son/Being a father
              wife/marriage
              Support Engineer
              Badminton
              Pandemic
              */}
              
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar2;