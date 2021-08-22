import React from 'react';

import './NavBar.css';

import NavLeft from "../NavLeft/NavLeft";
import SearchBar from "../SearchBar/SearchBar"
import NavRight from "../NavRight/NavRight";

const NavBar = props => {
  return (
    <div className="nav">
      <div className="nav__items">
        <NavLeft/>
        <SearchBar/>
        <NavRight/>
      </div>
    </div>
  );
};

export default NavBar;
