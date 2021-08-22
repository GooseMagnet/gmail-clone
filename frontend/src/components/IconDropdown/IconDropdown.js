import React from "react";
import { IconButton } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import "./IconDropdown.css";

const IconDropdown = (props) => {
  return (
    <>
      <IconButton className="dropdown__icon">
        {props.children}
        <ArrowDropDown />
      </IconButton>
    </>
  );
};

export default IconDropdown;
