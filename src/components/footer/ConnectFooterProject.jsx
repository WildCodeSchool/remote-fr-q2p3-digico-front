import React from 'react'
import "./ConnectFooterProject"
import {Link} from 'react-router-dom'
import "./ConnectFooterProject.css"

function ConnectFooter_project() {
    return (
        <div className="connectfooter_projet">
             <Link to='/'  className="button_welcome_connect_footer_project">ACCUEIL</Link>
             <Link to='/liste-idee'  className="button_project_connect_footer_project">IDEE</Link>
             <Link to='/user'  className="button_user_connect_footer_project" >
                <img className= "img_logo" src= "https://zupimages.net/up/21/38/15n1.png" alt="user_logo"/></Link>

            
        </div>
    )
}

export default ConnectFooter_project
