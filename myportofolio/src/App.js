import React, {useState} from "react";
import './App.css';
import Logo from "./components/Logo";
import NavigationBar from "./components/NavigationBar";
import StartText from "./components/StartText";
import StartPicture from "./components/StartPicture";
import ProgressBars from "./components/ProgressBars";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {

  return (
    <div className="mainContainer">
      <div id="Inicio" className="topContainer">
        <Logo/>
        <NavigationBar/>
      </div>
      <div className="start">
        <div className="itemContainer">
          <StartText/>
          <StartPicture/>
        </div>
      </div>
      <div className="abilities">
        <ProgressBars/>
      </div>
      <div className="proyects">
        <Project/>
      </div>
      <div id="Contacto" className="contactC">
        <Contact/>
      </div>
      <div class="upFooter">
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
