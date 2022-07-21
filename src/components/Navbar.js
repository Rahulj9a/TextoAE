import React from "react";
/* import { Link } from "react-router-dom"; */
import PropTypes from "prop-types";

export default function Navbar(props) {
  // we pass props here
  //way-2: we can also write it as .......Navbar({title})
  //But then we have to pass every property we want to change here. So props here is working as an object here

  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" rel="noreferrer">
          {props.title}
          {/* Here title is a property and can be changed from app.js */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active " aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li> */}
          </ul>
          <div className="d-flex">
            <div
              className="bg-primary rounded mx-2"
              style={{ height: "30px", width: "30px" }}
              onClick={()=>props.toggleMode('primary')}
            ></div>
            <div
              className="bg-danger rounded mx-2"
              style={{ height: "30px", width: "30px" }}
              onClick={()=>props.toggleMode('danger')}
            ></div>
            <div
              className="bg-success rounded mx-2"
              style={{ height: "30px", width: "30px" }}
              onClick={()=>props.toggleMode('success')}
            ></div>
            <div
              className="bg-warning rounded mx-2"
              style={{ height: "30px", width: "30px" }}
              onClick={()=>props.toggleMode('warning')}
            ></div>
             <div
              className={`bg-dark rounded mx-2 border`}
              style={{ height: "30px", width: "30px" }}
              
               onClick={()=>props.toggleMode('dark')}
            ></div>
            <div
              className={`bg-light rounded mx-2 border`}
              style={{ height: "30px", width: "30px" }}
              
               onClick={()=>props.toggleMode('light')}
            ></div>
          </div>
           
          {/* <div className={`form-check form-switch `}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="controlMode"
              onClick={props.toggleMode}
            />
            <label
              className={`form-check-label d-flex text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="controlMode"
            >
              Dark mode
            </label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}; // What types of proptype you want to deliver
// After using isRequired if we don't pass its value than it will show error

//We can also set a default value for it and in this case it will not show any error.
Navbar.defaultProps = {
  title: "Set title here", //If we don't pass prop in app.js than it will show up
};
