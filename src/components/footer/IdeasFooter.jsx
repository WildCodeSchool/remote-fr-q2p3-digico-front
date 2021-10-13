import React from 'react'
import {Link} from 'react-router-dom'
import './IdeasFooter.css'

function IdeasFooter() {
    return (
        <div className="IdeasFooter">
            <Link to='/'  className="button_welcome_subscribe">ACCUEIL</Link>
            <Link to='/liste-idee' className="button_idee_ideas_footer">IDEE</Link> 
            <div className="buttons_id">
            <Link to='/signup'  className="button_inscription_ideas_footer">INSCRIPTION</Link>
            <Link to='/login'  className="button_connection_ideas_footer">CONNECTION</Link> 
            </div>
                           
        </div>
    )
}

export default IdeasFooter