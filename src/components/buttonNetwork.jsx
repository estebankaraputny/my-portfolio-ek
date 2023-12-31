import React from "react";
import "../style/buttonNetworks.css"


const BotonRedes = (props) => {
    return (
        <li className={`child ${ props.childNumber }`}>
            <a href={ props.link } className={ props.clase }>
                <span className="linkNav">{props.children}</span>
            </a>
        </li>
    )
}

export default BotonRedes;