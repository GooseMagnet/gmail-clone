import React from 'react';
import {Button, Checkbox} from "@material-ui/core";
import {LabelImportant, Star, StarOutline} from "@material-ui/icons";
import './EmailList.css';
import {EmailsContext} from "../App/App";
import {updateEmail} from "../../util/api";
import {Link} from "react-router-dom";

const EmailList = () => {

  const {emails, setEmails} = React.useContext(EmailsContext);

  const handleSelectEmail = (toggledEmail) => {
    const changedEmails = emails.map(email => {
      if (toggledEmail === email) {
        email.isSelected = !email.isSelected;
      }
      return email;
    });
    setEmails(changedEmails);
  };

  const handleStarEmail = (toggledEmail) => {
    const changedEmails = emails.map(email => {
      if (toggledEmail === email) {
        email.star = !email.star;
      }
      return email;
    });
    updateEmail(toggledEmail);
    setEmails(changedEmails);
  };

  const handleImportantEmail = (toggledEmail) => {
    const changedEmails = emails.map(email => {
      if (toggledEmail === email) {
        email.important = !email.important;
      }
      return email;
    });
    updateEmail(toggledEmail);
    setEmails(changedEmails);
  };

  return (
    <div className="email__list">
      {emails.map(email => (
        <EmailRow
          onSelectEmail={handleSelectEmail}
          key={email.id}
          email={email}
          onStarEmail={handleStarEmail}
          onImportantEmail={handleImportantEmail}
        />
      ))}
    </div>
  );
};

const EmailRow = ({email, onSelectEmail, onStarEmail, onImportantEmail}) => {

  const options = {month: 'short', day: 'numeric'};
  const dateSent = new Date(email.dateSent);
  const formattedDate = dateSent.toLocaleDateString('en-US', options);

  return (
    <Link className={"email__link"} to={`/mail/${email.id}`}>
      <div
        className={`email__list__row ${email.isSelected ? 'email__list__row__selected' : ''} ${!email.read ? 'email__list__row__unread' : ''}`}>
        <div className="email__list__row__left">
          <Checkbox
            className="email__list__row__left__checkbox"
            checked={email.isSelected}
            onChange={() => onSelectEmail(email)}
          />
          <Button className="email__list__row__left__star" onClick={() => onStarEmail(email)}>
            {email.star ? <Star className="email__list__row__left__star__selected"/> : <StarOutline/>}
          </Button>
          <Button onClick={() => onImportantEmail(email)}>
            <LabelImportant
              className={`email__list__row__left__important ${email.important ? 'email__list__row__left__important__selected' : ''}`}/>
          </Button>
          <span
            className="email__list__row__from">{email.fromEmail}</span>
        </div>
        <div className="email__list__row__text">
        <span
          className="email__list__row__subject">{email.subject} - </span>
          <span className="email__list__row__body">{email.body}</span>
        </div>
        <span className="email__list__row__sent">{formattedDate}</span>
      </div>
    </Link>
  );
}

export default EmailList;
