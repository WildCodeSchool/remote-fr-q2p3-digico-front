import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
    return (
    <div>  
        <div className="navbar">
            <Link to="/creer-projet" className="linkNav">
                UN PROJET ?
            </Link>
            <Link to="/creer-idee" className="linkNav">
                UNE IDÉE ?
            </Link>
        </div>
    </div> 
    )
}

export default Navbar
