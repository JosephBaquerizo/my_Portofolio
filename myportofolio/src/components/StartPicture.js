import React from "react";
import image from "../assets/startPicture.png";

const StartPicture = () => {
    return (
        <div className="picContainer">
            <img className="startPic" src={image}/>
        </div>
    );
}

export default StartPicture;