import React from "react";
import "./EmailsHeader.css";
import {Checkbox, IconButton} from "@material-ui/core";
import {
  Keyboard,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  MoreVert,
  Refresh,
} from "@material-ui/icons";

const EmailsHeader = () => {
  return (
    <div className="emails-header">

      <div className="emails-header__left">
        <Checkbox className="emails-header__left__checkbox"/>
        <IconButton className="emails-header__left__refresh">
          <Refresh/>
        </IconButton>
        <IconButton className="emails-header__left__more">
          <MoreVert/>
        </IconButton>
      </div>

      <div className="emails-header__right">
        <span>1 - 50 of 1,166</span>
        <IconButton>
          <KeyboardArrowLeft/>
        </IconButton>
        <IconButton>
          <KeyboardArrowRight/>
        </IconButton>
        <IconButton>
          <Keyboard/>
        </IconButton>
      </div>
    </div>
  );
};

export default EmailsHeader;
