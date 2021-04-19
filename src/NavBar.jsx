import React from "react"
import {Navbar, NavbarBrand} from 'reactstrap';

class NavBar extends React.Component{
    render(){
        return(
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
            </Navbar>
        )
    }

}

export default NavBar;