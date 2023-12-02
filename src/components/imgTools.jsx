import React from "react";
import "../style/logoTool.css"

const ImagenesTools = ({ image, nameTool, name }) => {
    return (
        <div className="content-logoTool">
            <p className="name-of-logo">{name}</p>
            <img src={require(`../image/logo-${image}`)} alt={`Logo de ${nameTool}`} className="logoTools" />
        </div>
    )
}


export default ImagenesTools;