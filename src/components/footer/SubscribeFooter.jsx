import React from 'react'
import "./SubscribeFooter"
import {Link} from 'react-router-dom'
import './SubscribeFooter.css'

function SubscribeFooter() {
    return (
        <div className="subscribeFooter_accueil">
          
            <Link to='/signup'  className="button_inscription_subscribe">INSCRIPTION</Link>
            <Link to='/login'  className="button_connection_subscribe">CONNECTION</Link> 
            </div>

        
                           
      
    )
}

export default SubscribeFooter
