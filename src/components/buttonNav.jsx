import React from "react";
import "../style/buttonNav.css"

const BotonNav = (props) => {
    return (
        <li>
            <a className="buttonNav" href={ props.href } > 
                <span className="linkNav">{ props.relacion }</span>
                {props.children}
            </a>
        </li>
    )
}

export default BotonNav;