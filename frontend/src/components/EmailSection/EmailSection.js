import React from "react";
import EmailsHeader from "../EmailsHeader/EmailsHeader";
import EmailList from "../EmailList/EmailList";
import "./EmailSection.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Email from "../Email/Email";

const EmailSection = () => {
  return (
    <Router>
      <div className="emails-section">
        <EmailsHeader/>
        <Switch>
          <Route exact path={"/mail/:id"}>
            <Email/>
          </Route>
          <Route path={"/"}>
            <EmailList/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default EmailSection;
