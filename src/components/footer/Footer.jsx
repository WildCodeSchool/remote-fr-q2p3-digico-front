import React from 'react'
import {Link} from 'react-router-dom'
import home from '../../assets/home.png'
import "./Footer.css"


function Footer() {
    return (
    <div>  
        <div className="Footer">
            <Link to="/creationProjet" className="linkFooter">
                <p className="footerBtnTxt">J'ai un projet ?</p>
            </Link>
            <Link to="/utilisateur/:id" className="logoLink">
                <img src={home} alt="logo_home" />
            </Link>
            <Link to="/creer-idee" className="linkFooter">
                <p className="footerBtnTxt">J'ai une idée ?</p>
            </Link>
        </div>
    </div> 
    )
}

export default Footer
