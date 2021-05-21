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
import brandPicture from '../pictures/icons/a3-removebg-preview.png';
import githubPicture from '../pictures/icons/githubIconScaled.png';
import blogIconPicture from '../pictures/icons/blogIconScaled.png';
import linkedInIcon from '../pictures/icons/linkedInIconScaled.png';

const NavBar1 = props => {
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => setIsOpen(!isOpen);

   return (
      <div className="navbar-bottom-border sticky-top">
         <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/" style={{ paddingLeft: 5 }}>
               <img src={brandPicture} alt="a pic"></img>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
               <div className="linkedInIcon-listed-element">
                  <NavLink href="https://www.linkedin.com/in/alexander-cheng-90368255/">
                     <img src={linkedInIcon} alt="linkedInIcon pic"></img>
                  </NavLink>
               </div>
               <div className="githubPicture-listed-element">
                  <NavLink href="https://github.com/AlexanderCheng-91">
                     <img src={githubPicture} alt="github pic"></img>
                  </NavLink>
               </div>
               <div className="blogIconPicture-listed-element">
                  <NavLink>
                     <Link to="/blogs">
                        <img src={blogIconPicture} alt="blogIcon pic"></img>
                     </Link>
                  </NavLink>
               </div>
            </Collapse>
         </Navbar>
      </div>
   );
};

export default NavBar1;
