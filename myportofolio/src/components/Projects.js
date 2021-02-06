import React from "react";
import image1 from "../assets/pokecheck.jpg";

const Project = () => {
    return (
        <div class="projectContainer">
            <div className="projectTitleContainer">
                <h1 className="projectTitle">Proyectos</h1>
            </div>
            <div className="cardContainer">
                <div className="projectCard">
                    <img className="pokecheckImg" src={image1}/>
                    <h3 className="cardTitle">Pokécheck App</h3>
                </div>
                <div className="projectCard">
                    <img className="pokecheckImg" src={image1}/>
                    <h3 className="cardTitle">Pokécheck App</h3>
                </div>
                <div className="projectCard">
                    <img className="pokecheckImg" src={image1}/>
                    <h3 id="Contacto" className="cardTitle">Pokécheck App</h3>
                </div>
            </div>
        </div>
    );
}

export default Project;