import React from "react";
import "../NavBar.css";
import imgBurger from "../assets/burger.png";

const NavigationBar = () => {

    const navSlide = () => {
        let nav = document.querySelector(".nav-links");
        nav.classList.toggle("nav-active");
        
    }

    return (
        <div className="navBarContainer">
            <nav>
                <ul className="nav-links">
                    <li>
                        <a className="nav-op" href="#Inicio">Inicio</a>
                    </li>
                    <li>
                        <a className="nav-op" href="#Habilidades">Habilidades</a>
                    </li>
                    <li>
                        <a className="nav-op" href="#Proyectos">Proyectos</a>
                    </li>
                    <li>
                        <a className="nav-op" href="#Contacto">Contacto</a>
                    </li>
                </ul>
                <div className="menu">
                    <img onClick={navSlide} alt="1" className="burgerPic" src={imgBurger}/>
                </div>
            </nav>
        </div>
    );
}

export default NavigationBar;