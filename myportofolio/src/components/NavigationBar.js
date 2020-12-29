import React from "react";

const NavigationBar = () => {
    return (
        <div class="navBarContainer">
            <div className="navbar">
                <a className="item">Inicio</a>
                <a className="item sep">|</a>
                <a className="item">Habilidades</a>
                <a className="item sep">|</a>
                <a className="item">Proyectos</a>
                <a className="item sep">|</a>
                <a className="item">Contacto</a>
            </div>
        </div>
    );
}

export default NavigationBar;