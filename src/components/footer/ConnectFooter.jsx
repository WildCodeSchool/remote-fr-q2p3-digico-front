import React from 'react'
import "./ConnectFooter.css"

function ConnectFooter() {
    return (
        <div className="connectfooter">
             <Link to='/Welcome'  className="button_welcome">ACCUEIL</Link>
             <Link to='/user'  className="button_user">PROFIL</Link>

 
            
        </div>
    )
}

export default ConnectFooter
