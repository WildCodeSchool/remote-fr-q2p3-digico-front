import React from 'react'
import {Link} from 'react-router-dom'
import SubscribeFooter from "../../components/footer/SubscribeFooter.jsx"
import "./Welcome.css"

function Welcome() {
    return (
      
    <div className="welcome">

        <h1 className="pepidea">PEP'IDEA</h1>
        <p className="quote">"La soif du pouvoir est la vraie racine du mal" - Judith Moriae</p>


 
        <p className="presentation">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas illum sequi omnis iure! Eos officiis doloremque at numquam porro tempore voluptatem laboriosam repellat saepe expedita fugiat veritatis amet officia voluptate dolores corrupti optio veniam pariatur possimus quidem nam tenetur, quo animi harum!</p>


        <div className="buttonWelcome">
            <Link to="/liste-projet" className="linkWelcome">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
                ACCÉDER AUX PROJETS
            </Link>

            <Link to="/liste-idee" className="linkWelcome">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
                ACCÉDER AUX IDÉES
            </Link>
        </div>
      
           <SubscribeFooter/>
        
    </div>
    )
}

export default Welcome
