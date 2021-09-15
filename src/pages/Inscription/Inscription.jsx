import React from 'react'
import "./Inscription.css"

function Inscription() {
    return (
        <div>
            <form>
                <input 
                type="text" 
                placeholder="pseudo"
                className="pseudo"
                /> 
                <label name="email" >Entrer votre email</label>
                <input 
                placeholder="exmail@gmail.com"
                className="email"
                />
                <label name="password">Mot de passe</label>
                <input
                placeholder="mot de passe"
                type="password"
                className="password"
                />
                <label name="password">Confirmer Mot de passe</label>
                <input
                placeholder="mot de passe"
                type="password"
                className="password"
                />
            </form>
            <button className="insc-btn">INSCRIPTION</button>
        </div>
    )
}

export default Inscription

