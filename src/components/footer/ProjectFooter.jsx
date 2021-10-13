import React from 'react'
import "./ProjectFooter"
import {Link} from 'react-router-dom'
import './ProjectFooter.css'

function Project_footer() {
    return (
        <div className="Project_footer">
            <Link to='/'  className="button_welcome_project_footer">ACCUEIL</Link>
            <Link to='/liste-projet'  className="button_projet">PROJET</Link> 
            <div className="buttons_id">
            <Link to='/signup'  className="button_inscription_project_footer">INSCRIPTION</Link>
            <Link to='/login'  className="button_connection_project_footer">CONNECTION</Link> 
            </div>
                           
        </div>
    )
}

export default Project_footer
