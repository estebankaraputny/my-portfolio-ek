import React from "react";
import "../style/studyCurse.css"

const Curso = ({ nameCurse, contenidoCurse, dateCurse }) => {
    return (
        
        <div className="curso-target">
            <p className="name-curso">{nameCurse}</p>
            <p className="contenido-curso">{ contenidoCurse }</p>
            <p className="fecha-curso">{ dateCurse }</p>
        </div>
    )
}

export default Curso;