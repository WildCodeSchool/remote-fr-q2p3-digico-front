import React from 'react'
import {Link} from 'react-router-dom'
import SubscribeHeader from '../../components/footer/SubscribeHeader'
import logo from '../../Assets/logo.png'
import background from'../../Assets/BackGround1.png'

import "./Welcome.css"

function Welcome() {
    return (
      
    <div className="welcome">
         
        <div className="background_welcome">
        <img src={background} alt="" /></div>  
        <SubscribeHeader/>
    <div className="image_details_projet">
        <img src={logo} alt="image_logo" />
                 </div>
    <div className="titre_welcome">
        <p className="pepidea">PEP'IDEA </p>
        <span className="share">SHARE YOUR IDEAS</span>
        </div>
        

        <div className="buttonWelcome">

            <Link to="/liste-projet" className="linkWelcome">
           
                ACCÉDER AUX PROJETS
            </Link>

            <Link to="/liste-idee" className="linkWelcome">
            
                ACCÉDER AUX IDÉES
            </Link>
        </div>
      
      
        
    </div>
    )
}

export default Welcome
