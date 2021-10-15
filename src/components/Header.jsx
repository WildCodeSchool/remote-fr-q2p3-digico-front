import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="header_container">
            
            <Link to="/" className="title_header">
            PEP'IDEA </Link>
            <Link to="/liste-projet" className="linkprojets">Projets</Link>
            <Link to="/liste-idee" className="linkidees">Idées</Link>
        </div>
    )
}

export default Header
