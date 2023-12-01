import React from "react";
import "../style/buttonNav.css"

const BotonNav = (props) => {
    return (
        <li>
            <a className="buttonNav" href={ props.href } > { props.children } </a>
        </li>
    )
}

export default BotonNav;