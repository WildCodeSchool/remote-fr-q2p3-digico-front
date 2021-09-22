import React from 'react'
import "./ConnectFooter"
import {Link} from 'react-router-dom'
import "./ConnectFooter.css"

function ConnectFooter() {
    return (
        <div className="connectfooter">
             <Link to='/'  className="button_welcome">ACCUEIL</Link>
             <Link to='/user'  className="button_user" >
                <img className= "img_logo" src= "https://zupimages.net/up/21/38/15n1.png" alt="user_logo"/></Link>

            
        </div>
    )
}

export default ConnectFooter
