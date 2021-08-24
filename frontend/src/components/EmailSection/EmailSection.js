import React from "react";
import EmailsHeader from "../EmailsHeader/EmailsHeader";
import EmailList from "../EmailList/EmailList";
import "./EmailSection.css";

const EmailSection = (props) => {
  return (
    <div className="emails-section">
      <EmailsHeader/>
      <EmailList/>
    </div>
  );
};

export default EmailSection;
