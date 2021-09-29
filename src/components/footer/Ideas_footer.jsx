import React from 'react'
import "./Ideas_footer"
import {Link} from 'react-router-dom'
import './Ideas_footer.css'

function Ideas_footer() {
    return (
        <div className="Ideas_footer">
            <Link to='/'  className="button_welcome_subscribe">ACCUEIL</Link>
            <Link to='/liste-idee' className="button_idee_ideas_footer">IDEE</Link> 
            <div className="buttons_id">
            <Link to='/signup'  className="button_inscription_ideas_footer">INSCRIPTION</Link>
            <Link to='/login'  className="button_connection_ideas_footer">CONNECTION</Link> 
            </div>
                           
        </div>
    )
}

export default Ideas_footer