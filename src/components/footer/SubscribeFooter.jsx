import React from 'react'
import "./SubscribeFooter"
import {Link} from 'react-router-dom'
import './SubscribeFooter.css'

function SubscribeFooter() {
    return (
        <div className="subscribeFooter">
            <Link to='/'  className="button_welcome_subscribe">ACCUEIL</Link>
            <Link to='/signup'  className="button_inscription">INSCRIPTION</Link>
               
            <form className="connection">
            <label name="pseudo" >
            <input 
                type="text" 
                placeholder="pseudo"
                className="pseudo"
                /> 
                </label>
                <label name="password" >
                <input
                placeholder="mot de passe"
                type="password"
                className="password"
                />
                 <Link to='/login'  className="button_connection">CONNECTION</Link>
                </label>
                </form>
                           
        </div>
    )
}

export default SubscribeFooter
