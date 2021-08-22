import React from 'react';
import './NavRight.css'
import {Apps, HelpOutline, SettingsOutlined} from "@material-ui/icons";
import {Avatar, IconButton} from "@material-ui/core";
import img from '../../assets/avatar.png'

const NavRight = props => {
  return (
    <div className="nav__right">
      <IconButton>
        <HelpOutline/>
      </IconButton>
      <IconButton>
        <SettingsOutlined/>
      </IconButton>
      <IconButton>
        <Apps/>
      </IconButton>
      <Avatar src={img} className="nav__right__avatar"/>
    </div>
  );
}

export default NavRight;
