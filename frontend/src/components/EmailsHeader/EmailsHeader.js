import React from "react";
import "./EmailsHeader.css";
import {Checkbox, IconButton} from "@material-ui/core";
import {
  Archive, CheckCircle, Delete, FolderSpecial,
  IndeterminateCheckBox,
  Keyboard,
  KeyboardArrowLeft,
  KeyboardArrowRight, Label, Mail,
  MoreVert,
  Refresh, Report, WatchLater,
} from "@material-ui/icons";
import {EmailsContext} from "../App/App";
import {deleteBulkEmails, getAllEmails} from "../../util/api";

const EmailsHeader = () => {

  const {emails, setEmails, setIsLoading, setIsError} = React.useContext(EmailsContext);

  const selectedEmails = emails.filter(email => email.isSelected);

  const handleSelectAll = () => {
    const unselected = emails.map(email => {
      email.isSelected = true;
      return email;
    });
    setEmails(unselected);
  };

  const handleUnselectAll = () => {
    const unselected = emails.map(email => {
      email.isSelected = false;
      return email;
    });
    setEmails(unselected);
  };

  const handleDeleteSelected = () => {
    const deleteIds = emails.filter(email => email.isSelected).map(email => email.id);
    const updated = emails.filter(email => !email.isSelected);

    deleteBulkEmails(deleteIds).then(setEmails(updated));
  };

  const handleReloadEmails = () => {
    getAllEmails()
      .then(r => {
        const emailsWithSelection = r.data.slice(0, 50).map(email => {
          email.isSelected = false;
          return email;
        });
        setEmails(emailsWithSelection);
        setIsLoading(false);
        setIsError(false);
      })
      .catch(err => {
        console.error(err);
        setIsError(true);
        setIsLoading(false);
      });
  };

  return (
    <div className="emails-header">
      <div className="emails-header__left">
        {
          selectedEmails.length > 0 ?
            <EmailHeaderSelected onUnselectAll={handleUnselectAll} onDeleteSelected={handleDeleteSelected}/> :
            <EmailHeaderNoSelected onSelectAll={handleSelectAll} onReloadEmails={handleReloadEmails}/>
        }
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

const EmailHeaderNoSelected = ({onSelectAll, onReloadEmails}) => {
  return (
    <>
      <Checkbox onChange={onSelectAll} className="emails-header__left__checkbox"/>
      <IconButton className="emails-header__left__refresh" onClick={onReloadEmails}>
        <Refresh/>
      </IconButton>
    </>
  );
}

const EmailHeaderSelected = ({onUnselectAll, onDeleteSelected}) => {
  return (
    <div className="emails-header__selected">
      <IconButton onClick={onUnselectAll}>
        <IndeterminateCheckBox/>
      </IconButton>
      <div className={"emails-header__selected__delete"}>
        <IconButton>
          <Archive/>
        </IconButton>
        <IconButton>
          <Report/>
        </IconButton>
        <IconButton onClick={onDeleteSelected}>
          <Delete/>
        </IconButton>
      </div>
      <div className={"emails-header__selected__tasks"}>
        <IconButton>
          <Mail/>
        </IconButton>
        <IconButton>
          <WatchLater/>
        </IconButton>
        <IconButton>
          <CheckCircle/>
        </IconButton>
      </div>
      <div className={"emails-header__selected__right"}>
        <IconButton>
          <FolderSpecial/>
        </IconButton>
        <IconButton>
          <Label/>
        </IconButton>
      </div>
    </div>
  );
}

export default EmailsHeader;
