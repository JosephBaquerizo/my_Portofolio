import React from "react";
import imageLinkedin from "../assets/linkedin.png";
import imageGithub from "../assets/github.png";
import imageYoutube from "../assets/youtube.png";

const Footer = () => {
    return (
        <div className="footerContainer">
            <img className="foot" src={imageLinkedin}/>
            <img className="foot" src={imageGithub}/>
            <img className="foot" src={imageYoutube}/>
        </div>
    );
}

export default Footer;