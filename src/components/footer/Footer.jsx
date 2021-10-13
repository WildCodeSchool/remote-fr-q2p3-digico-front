import React from 'react'
import {Link} from 'react-router-dom'
import "./Footer.css"


function Footer() {
    return (
    <div>  
        <div className="Footer">
            <Link to="/creer-projet" className="linkFooter">
            {/* <span></span>
            <span></span>
            <span></span>
            <span></span> */}
            UN PROJET ?
            </Link>

            <Link to="/" className="logoLink">
            </Link>

            <Link to="/creer-idee" className="linkFooter">
           
            UNE IDÉE ?
            </Link>
        </div>
    </div> 
    )
}

export default Footer
