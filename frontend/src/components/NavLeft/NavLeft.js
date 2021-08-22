import React from 'react';
import './NavLeft.css'
import logo from '../../assets/gmail-logo.png'
import {Menu} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";

const NavLeft = props => {
  return (
    <div className="nav__left">
      <IconButton>
        <Menu/>
      </IconButton>
      <div className="nav__logo">
        <img src={logo} alt="gmail-logo"/>
      </div>
    </div>
  );
}

export default NavLeft;
