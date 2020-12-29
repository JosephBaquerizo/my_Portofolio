import React from "react";
import "../NavBar.css";
import imgBurger from "../assets/burger.png";

const NavigationBar = () => {

    const navSlide = () => {
        const burger = document.querySelector(".burgerPic");
        let nav = document.querySelector(".nav-links");
        nav.classList.toggle("nav-active");
        
    }

    return (
        <div class="navBarContainer">
            <nav>
                <ul className="nav-links">
                    <li>
                        <a href="#Inicio">Inicio</a>
                    </li>
                    <li>
                        <a href="#Habilidades">Habilidades</a>
                    </li>
                    <li>
                        <a href="#Proyectos">Proyectos</a>
                    </li>
                    <li>
                        <a href="#Contacto">Contacto</a>
                    </li>
                </ul>
                <div className="menu">
                    <img onClick={navSlide} id="1"className="burgerPic" src={imgBurger}/>
                </div>
            </nav>
        </div>
    );
}

export default NavigationBar;