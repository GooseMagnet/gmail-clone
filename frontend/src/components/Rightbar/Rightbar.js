import React from 'react';
import './Rightbar.css';
import {Avatar, Button} from "@material-ui/core";
import calendar from '../../assets/calendar.png';
import keep from '../../assets/keep.png';
import tasks from '../../assets/tasks.png'
import contacts from '../../assets/contacts.png'
import {Add} from "@material-ui/icons";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <Button className="rightbar__calendar" startIcon={<Avatar src={calendar}/>}/>
      <Button className="rightbar__keep" startIcon={<Avatar src={keep}/>}/>
      <Button className="rightbar__tasks" startIcon={<Avatar src={tasks}/>}/>
      <Button className="rightbar__contacts" startIcon={<Avatar src={contacts}/>}/>
      <hr/>
      <Button className="rightbar__plus" startIcon={<Add/>}/>
    </div>
  );
};

export default Rightbar;
