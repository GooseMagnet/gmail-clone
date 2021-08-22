import React from "react";
import "./Email.css";
import { Checkbox, IconButton } from "@material-ui/core";
import {
  LabelImportant,
  LabelImportantOutlined,
  StarOutline,
} from "@material-ui/icons";

const Email = ({ isSelected, isImportant }) => {
  return (
    <tr className={`email__row ${isSelected ? "email__row__selected" : ""}`}>
      <Sender isSelected={isSelected} isImportant={isImportant} />
      <td>
        <span>Appointment Reminder</span> Hi Goose, I'm appointing you the new
        CEO of Microsoft, please call me back...
      </td>
      <td>Aug 11</td>
    </tr>
  );
};

const Sender = ({ isSelected, isImportant }) => {
  return (
    <td className="email__sender">
      <IconButton className="email__select">
        <Checkbox checked={isSelected} />
      </IconButton>
      <IconButton className="email__star">
        <StarOutline />
      </IconButton>
      <IconButton
        className={`email__important ${
          isImportant ? "email__important__selected" : ""
        }`}
      >
        {isImportant ? <LabelImportant /> : <LabelImportantOutlined />}
      </IconButton>
      <span>Bill Gates</span>
    </td>
  );
};

export default Email;
