import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="header_container">
            <p className="title_header"> PEP'IDEA</p>
            <Link to="/liste-projet" className="linkprojets">Projets</Link>
            <Link to="/liste-idees" className="linkidees">Idées</Link>
        </div>
    )
}

export default Header
