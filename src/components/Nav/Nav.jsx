import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


function Nav() {
  return (
    <nav className= "nav-links">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/Login">Login</Link></li> 
        <li><Link to="/user">Register</Link></li>
      </ul>
    </nav>
    ); 
}
export default Nav;