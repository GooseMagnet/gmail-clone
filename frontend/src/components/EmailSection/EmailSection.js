import React from "react";
import EmailsHeader from "../EmailsHeader/EmailsHeader";
import EmailsTable from "../EmailsTable/EmailsTable";
import "./EmailSection.css";

const EmailSection = (props) => {
  return (
    <div className="emails-section">
      <EmailsHeader />
      <EmailsTable />
    </div>
  );
};

export default EmailSection;
