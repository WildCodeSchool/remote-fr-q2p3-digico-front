import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"


function Navbar() {
    return (
    <div>  
        <div className="navbar">
            <Link to="/creer-projet" className="linkNav">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            UN PROJET ?
            </Link>

            <Link to="/" className="logoLink">
            </Link>

            <Link to="/creer-idee" className="linkNav">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            UNE IDÉE ?
            </Link>
        </div>
    </div> 
    )
}

export default Navbar
