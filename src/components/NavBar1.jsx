import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,

   // Nav, what does Nav do?
   // NavItem,
   NavLink,
   // UncontrolledDropdown,
   // DropdownToggle,
   // DropdownMenu,
   // DropdownItem,
   // NavbarText
} from 'reactstrap';

import a2BackgroundRemoved from '../pictures/icons/brandImage.svg';
import githubPicture from '../pictures/icons/github.svg';
import blogIconPicture from '../pictures/icons/blogger.svg';
import linkedInIcon from '../pictures/icons/linkedin.svg';

const NavBar1 = props => {
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => setIsOpen(!isOpen);

   return (
      <div className="navbar-bottom-border sticky-top">
         <Navbar color="dark" dark expand="md">
            <NavbarBrand href="https://alexandercheng-91.github.io/about-me3/#/" style={{ paddingLeft: 5 }}>
               <img
                  src={a2BackgroundRemoved}
                  alt="an icon of the lowercase letter a"
                  style={{ width: 30, height: 30 }}
               ></img>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
               <div className="linkedInIcon-listed-element">
                  <NavLink href="https://www.linkedin.com/in/alexander-cheng-90368255/">
                     <img
                        src={linkedInIcon}
                        alt="linkedInIcon pic Icons made by Pixel perfect https://www.flaticon.com/authors/pixel-perfect"
                        style={{ width: 30, height: 30 }}
                     ></img>
                  </NavLink>
               </div>
               <div className="githubPicture-listed-element">
                  <NavLink href="https://github.com/AlexanderCheng-91">
                     <img
                        src={githubPicture}
                        alt="github pic Icons made by Pixel perfect https://www.flaticon.com/authors/pixel-perfect"
                        style={{ width: 30, height: 30 }}
                     ></img>
                  </NavLink>
               </div>
               <div className="blogIconPicture-listed-element">
                  <NavLink>
                     <Link to="/blogs">
                        <img
                           src={blogIconPicture}
                           alt="blogIcon pic Icons made by Pixel perfect https://www.flaticon.com/authors/pixel-perfect"
                           style={{ width: 30, height: 30 }}
                        ></img>
                     </Link>
                  </NavLink>
               </div>
            </Collapse>
         </Navbar>
      </div>
   );
};

export default NavBar1;
