import React from "react";
import Search from "./Search";
import PropTypes from "prop-types";


function Nav(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse searchpallet " id="navbarSupportedContent">
                    {props.welcomePage ? "Welcome To Page" : ""}
                    <Search />
                </div>

            </nav>
        </>

    );
}
Nav.defaultProps ={
    title: "To-Do List"
}

Nav.propTypes ={
title:PropTypes.string
}

export default Nav; 