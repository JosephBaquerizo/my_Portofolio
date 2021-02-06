import React from "react";
import imageLinkedin from "../assets/linkedin.png";
import imageGithub from "../assets/github.png";
import imageYoutube from "../assets/youtube.png";

const Footer = () => {
    return (
        <div className="footerContainer">
            <a href="https://www.linkedin.com/in/joseph-baquerizo-792ab21a9/">
                <img className="foot" src={imageLinkedin}/>
            </a>
            <a href="https://github.com/JosephBaquerizo">
                <img className="foot" src={imageGithub}/>
            </a>
            <a href="https://www.youtube.com/channel/UCRm4GvkpQYqU5CbTrUJnTaA">
                <img className="foot" src={imageYoutube}/>
            </a>
        </div>
    );
}

export default Footer;