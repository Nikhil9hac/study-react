import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" data-aos="fade-right" data-aos-duration="900">
  <div className="container-fluid">
  <img src="https://i.ibb.co/0rcL5xq/logo.png" alt="Logo"  />
    <NavLink to="/" className="navbar-brand">Study<span>high</span></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item text-center">
          <NavLink to="/"className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item text-center">
            <NavLink to="/material" className="nav-link">Material</NavLink>
        </li>
        <li className="nav-item dropdown text-center">
          <a className="nav-link dropdown-toggle" href="https://google.com" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Report
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink to="/request-course" className="dropdown-item">Report-Course</NavLink></li>
            <li><NavLink to="/deadlink" className="dropdown-item">Report DeadLink</NavLink></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>   
        
        </>
    )
}
export default Nav;


