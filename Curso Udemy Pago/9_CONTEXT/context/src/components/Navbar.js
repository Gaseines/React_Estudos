import React from 'react'

//Router
import {NavLink} from "react-router-dom"

//Styles
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <ul className='list'>
            <NavLink className='l-link' to={"/"}>Home</NavLink>
            
            <NavLink className='l-link' to={"/products"}>Produtos</NavLink>

            <NavLink className='l-link' to={"/about"}>Sobre</NavLink>
        </ul>
    </nav>
  )
}

export default Navbar
