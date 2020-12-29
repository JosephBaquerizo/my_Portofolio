import React from "react";
import ProgressBar from "./ProgressBar";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import python from "../assets/python.png";

const ProgressBars = () => {
    return (
        <div className="progressContainer">
            <div className="progressTitle">
                <h1 className="habilidades">Habilidades</h1>
            </div>
            <div className="barContainer">
                    <img alt="1" className="iconBar" src={html}/>
                    <ProgressBar className="bar" bgcolor={"orange"} completed={85}/>
                    <img alt="2" className="iconBar" src={css}/>
                    <ProgressBar className="bar" bgcolor={"#1F3C88"} completed={90}/>
                    <img alt="3" className="iconBar" src={js}/>
                    <ProgressBar className="bar" bgcolor={"#FFE05D"} completed={75}/>
                    <img alt="4" className="iconBar" src={react}/>
                    <ProgressBar className="bar" bgcolor={"#2D6187"} completed={85}/>
                    <img alt="5" className="iconBar" src={python}/>
                    <ProgressBar className="bar" bgcolor={"green"} completed={65}/>
            </div>
        </div>
    );
}

export default ProgressBars;