import React from "react";
import {Avatar, Button} from "@material-ui/core";
import "./Sidebar.css";
import plus from "../../assets/plus.png";
import Category from "../Category/Category";
import {
  ExpandMore,
  Inbox,
  InsertDriveFile,
  LabelImportant,
  Mail,
  Send,
  Star,
  WatchLater,
} from "@material-ui/icons";
import {EmailsContext} from "../App/App";

const Sidebar = ({onComposeEmail}) => {

  const {emails} = React.useContext(EmailsContext);
  const unread = emails.filter(email => email.read === false);

  return (
    <div className="sidebar">
      <Button className="sidebar__compose" onClick={onComposeEmail} startIcon={<Avatar src={plus}/>}>
        Compose
      </Button>
      <div className="sidebar__categories">
        <Category Icon={Inbox} title="Inbox" isSelected={true}>{unread.length > 0 && unread.length}</Category>
        <Category Icon={Star} title="Starred"/>
        <Category Icon={WatchLater} title="Snoozed" isSelected={true}/>
        <Category Icon={LabelImportant} title="Important"/>
        <Category Icon={Send} title="Sent"/>
        <Category Icon={InsertDriveFile} title="Drafts"/>
        <Category Icon={Mail} title="All Mail"/>
        <Category Icon={ExpandMore} title="More"/>
      </div>
    </div>
  );
};

export default Sidebar;
