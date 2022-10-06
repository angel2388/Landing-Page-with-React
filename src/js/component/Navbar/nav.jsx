import React from "react";
import "./nav.css"

const Nav = () => {
    return (
        <nav className="navbar navbar-dark bg-dark myNav">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark"  id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Start Bootstrap</h5>
        <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item bg-dark ">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item bg-dark">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item bg-dark">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item bg-dark">
            <a className="nav-link" href="#">Contact</a>
          </li>
            
        </ul>
        
      </div>
    </div>
  </div>
</nav>
    )
}
export default Nav;