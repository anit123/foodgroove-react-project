import React from 'react';
import logo from '../../logo.svg';
import'./navbar.scss'
function Navbar() {
    return (
      <nav className="navbar">
          <div className="container">
          <img src={logo} alt="food-groovelogo"/>
          </div>
          <ul className="nav-links">
              <li><a href="" className="nav-link">Home</a></li>
              <li><a href="" className="nav-link">About</a></li>
              <li><a href="" className="nav-link active">Food</a></li>
             
          </ul>
          <h1>food groove ..</h1>
      </nav>
    )
}

export default Navbar
