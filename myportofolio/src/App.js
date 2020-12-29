import React, {useState} from "react";
import './App.css';
import Logo from "./components/Logo";
import NavigationBar from "./components/NavigationBar";
import StartText from "./components/StartText";
import StartPicture from "./components/StartPicture";
import ProgressBars from "./components/ProgressBars";
import Project from "./components/Projects";

const App = () => {

  return (
    <div className="mainContainer">
      <div className="topContainer">
        <Logo/>
        <NavigationBar/>
      </div>
      <div className="start">
        <StartText/>
        <StartPicture/>
      </div>
      <div className="abilities">
        <ProgressBars/>
      </div>
      <div className="proyects">
        <Project/>
      </div>
      <div className="contact">
      </div>
    </div>
  );
}

export default App;
