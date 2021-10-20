import React from 'react'
import {Link} from 'react-router-dom'
import home from '../../assets/home.png'
import "./Footer.css"


function Footer() {
    return (
    <div>  
        <div className="Footer">
            <Link to="/creationProjet" className="linkFooter">
          J'ai un projet ?
            </Link>

            <Link to="/utilisateur/:id" className="logoLink">
                <img src={home} alt="logo_home" />
            </Link>

            <Link to="/creer-idee" className="linkFooter">
           
            J'ai une idée ?
            </Link>
        </div>
    </div> 
    )
}

export default Footer
