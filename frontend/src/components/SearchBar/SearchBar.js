import React from 'react';
import './SearchBar.css';
import {Search, Tune} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";

const SearchBar = () => {
  return (
    <div className="nav__middle">
      <div className="nav__search">
        <IconButton>
          <Search/>
        </IconButton>
        <input className="nav__search__input" type="text" placeholder="Search mail"/>
        <IconButton>
          <Tune/>
        </IconButton>
      </div>
    </div>
  );
};

export default SearchBar;
