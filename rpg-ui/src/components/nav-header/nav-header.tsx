import { Link } from "react-router-dom";
import d20 from "./../../assets/imgs/d20.png"
import "./nav-header.css"
import React from "react";

function NavHeader() {
    return(
        <div className="navheader">
            <img src={d20} className="logo"/>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/">Mundo</Link>
                <Link to="/">Raças</Link>
                <Link to="/">Classes</Link>
            </div>
        </div>
    )
}

export default NavHeader;