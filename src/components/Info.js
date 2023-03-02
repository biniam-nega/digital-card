import React from "react";

import logo from "../img/biniam.jpg";


function Info() {
    return (
        <div className="info">
            <img className="img" src={logo} />
            <div className="body">
                <h2>Biniam Nega</h2>
                <p>Fullstack engineer</p>
                <div className="buttons">
                    <button className="email"><i className="fa fa-envelope"></i> Email</button>
                    <button className="linkdin"><i className="fab fa-linkedin"></i> LinkdIn</button>
                </div>
            </div>
        </div>
    )
}

export default Info;
