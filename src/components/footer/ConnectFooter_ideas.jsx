import React from 'react'
import "./ConnectFooter_ideas"
import {Link} from 'react-router-dom'
import "./ConnectFooter_ideas.css"

function ConnectFooter_ideas() {
    return (
        <div className="connectfooter_ideas">
             <Link to='/'  className="button_welcome_connect_ideas">ACCUEIL</Link>
             <Link to='/liste-projet'  className="button_project_connect_ideas">PROJET</Link>
             <Link to='/user'  className="button_user" >
                <img className= "img_logo" src= "https://zupimages.net/up/21/38/15n1.png" alt="user_logo"/></Link>

            
        </div>
    )
}

export default ConnectFooter_ideas
