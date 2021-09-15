import React from 'react'
import "./SubscribeFooter"
import {Link} from 'react-router-dom'
function SubscribeFooter() {
    return (
        <div className="subscribeFooter">
            <Link to='/inscription' className="link"><a>INSCRIPTION</a></Link>
            <form>
            <input 
                type="text" 
                placeholder="pseudo"
                className="pseudo"
                /> 
                <label name="password">Mot de passe</label>
                <input
                placeholder="mot de passe"
                type="password"
                className="password"
                />
            </form>
            <button>CONNECTION</button>

            
        </div>
    )
}

export default SubscribeFooter
