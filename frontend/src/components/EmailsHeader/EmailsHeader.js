import React from "react";
import "./EmailsHeader.css";
import { Checkbox, IconButton } from "@material-ui/core";
import {
  Keyboard,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  MoreVert,
  Refresh,
} from "@material-ui/icons";
import IconDropdown from "../IconDropdown/IconDropdown";

const EmailsHeader = () => {
  return (
    <div className="emails-header">
      <div className="emails-header__left">
        <div className="emails-header__select">
          <IconDropdown>
            <Checkbox />
          </IconDropdown>
        </div>
        <IconButton>
          <Refresh />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>
      <div className="emails-header__right">
        <div className="emails-header__right__pages">
          <span>1-50 of 1,166</span>
          <IconButton>
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton>
            <KeyboardArrowRight />
          </IconButton>
        </div>
        <IconDropdown>
          <Keyboard />
        </IconDropdown>
      </div>
    </div>
  );
};

export default EmailsHeader;
