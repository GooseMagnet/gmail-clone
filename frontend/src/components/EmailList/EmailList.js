import React from 'react';
import {Button, Checkbox} from "@material-ui/core";
import {LabelImportant, StarOutline} from "@material-ui/icons";
import './EmailList.css';

const EmailList = () => {

  const emails = [];
  for (let i = 0; i < 50; ++i) {
    emails.push(<EmailRow/>);
  }

  return (
    <div className="email__list">
      {emails}
    </div>
  );
};

const EmailRow = () => {
  return (
    <div className="email__list__row">
      <div className="email__list__row__left">
        <Checkbox/>
        <Button className="email__list__row__left__star">
          <StarOutline/>
        </Button>
        <Button className="email__list__row__left__important">
          <LabelImportant/>
        </Button>
        <span
          className="email__list__row__from">{Math.random() < 0.5 ? 'Bill Gates' : 'Super Long Username of various lengths'}</span>
      </div>
      <div className="email__list__row__text">
        <span
          className="email__list__row__subject">{Math.random() < 0.5 ? 'Codeforces Round 740' : 'Random Email Subject that May or May not be long'} - </span>
        <span className="email__list__row__body">Attention! The round starts on Tuesday, August, 24, 2021 14:35 (UTC). Hello, GooseMagnet. I'm glad to invite you to take part in Codeforces Round 740 based on VK Cup 2021 - Final (Engine). Actually</span>
      </div>
      <span className="email__list__row__sent">5:45 PM</span>
    </div>
  );
}

export default EmailList;
