import React from "react";

//Styles
import './Navbar.css'

//React Router
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/About">Sobre</Link> */}

      <NavLink to="/" >Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  );
};

export default Navbar;
