import React from 'react'
import "./SubscribeHeader"
import {Link} from 'react-router-dom'
import './SubscribeHeader.css'

function SubscribeHeader() {
    return (
        <div className="subscribeHeader_accueil">
          
            <Link to='/signup'  className="button_inscription_subscribe">Se connecter</Link>
            <Link to='/login'  className="button_connection_subscribe">S'inscrire</Link> 
            </div>

        
                           
      
    )
}

export default SubscribeHeader
