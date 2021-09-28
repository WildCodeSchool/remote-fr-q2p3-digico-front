import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import SubscribeFooter from "../../components/footer/SubscribeFooter.jsx"
// import Contribution from '../Contribution.jsx'
import {Link} from 'react-router-dom'
import "./DetailsProject.css"

function DetailsProject() {
    return (
        <div>
            <SubscribeFooter/>
            
            <h1>Projet</h1>
            <Navbar/>
            <div className="contrib">
            <Link to="/Contribution" className="page_contrib">
           <p>CONTRIBUER?</p>
            </Link>
            </div>
            </div>
    )
}

export default DetailsProject
