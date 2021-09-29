import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Ideas_footer from "../../components/footer/Ideas_footer.jsx"
// import Contribution from '../Contribution.jsx'
import {Link} from 'react-router-dom'
import "./DetailsProject.css"


function DetailsProject() {
    return (
        <div>
            <Ideas_footer/>
<div className="image_d"></div>  
            {/* <div className="contrib"> */}
                
            <Link to='/Contribution' className="button_contribution">CONTRIBUER</Link>
          
            <Navbar/>
            
            
            </div>
            // </div>
    )
}

export default DetailsProject
