import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"


function Navbar() {
    return (
    <div>  
        <div className="navbar">
            <Link to="/creer-projet" className="link">CRÉER UN PROJET</Link>
            <Link to="/" className="link">ACCUEIL</Link>
            <Link to="/creer-idee" className="link">J'AI UNE IDÉE</Link>
        </div>
    </div> 
    )
}

export default Navbar
