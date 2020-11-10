import React from "react";
import { Link } from "react-router-dom";
// import "./Nav.css";


function NavUser({logOut}) {
  return (
    <nav className= "nav-links">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/createProject">Create Project</Link></li>
        <li><Link to="/" onClick={logOut}>Log Out</Link></li>
      </ul>
    </nav>
    ); 
}
export default NavUser;