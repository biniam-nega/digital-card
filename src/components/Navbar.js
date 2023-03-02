import React from "react";

import Logo from "../img/logo192.png";


const NavBar = () => {
    return (
        <nav>
            <div className="right">
                <img src={Logo} />
                <h3>ReactFacts</h3>
            </div>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

export default NavBar;
