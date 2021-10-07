import React, {Component} from "react";

//Stateless Functional Component
const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="navbar-brand">Navbar
                    <span className="Badge badge-pill badge-secondary">{totalCounters}</span>
                </a>
            </div>
        </nav>
    )
};

export default NavBar;
