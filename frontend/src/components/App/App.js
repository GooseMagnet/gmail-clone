import "./App.css";
import React from "react";
import NavBar from "../NavBar/NavBar";
import Sidebar from "../Sidebar/Sidebar";
import EmailSection from "../EmailSection/EmailSection";
import Rightbar from "../Rightbar/Rightbar";

const App = () => {
    return (
      <div className="app">
        <NavBar/>
        <Sidebar/>
        <Rightbar/>
        <EmailSection/>
      </div>
    );
  }
;

export default App;
