import React from "react";
import "../style/cardProject.css"

const CardProyecto = ({ linkProject, titleProject, proyectoImg, dateProject }) => {
    return (
        <a href={linkProject} className="card">
            <div className="content-img-project">
                <img src={require(`../image/proyecto-${proyectoImg}`)} alt="Imagen ilustrativa del proyecto" className="img-project" />
            </div>
            <div className="content-info-project-two">
                <p className="title-project">{titleProject}</p>
                <p className="date-project">{dateProject}</p>
            </div>
        </a>
    )
}


export default CardProyecto;
