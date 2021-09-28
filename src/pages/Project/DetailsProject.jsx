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

            <div className="contrib">
                
            <Link to='/Contribution' className="button_contribution">CONTRIBUER</Link>
          
            <Navbar/>
            
            
            </div>
            </div>
    )
}

export default DetailsProject
