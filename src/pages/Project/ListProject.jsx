import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import SubscribeFooter from "../../components/footer/SubscribeFooter.jsx"
import {Link} from 'react-router-dom'
import './ListProject.css'

import "./ListProject.css"

function ListProject() {
    return (
        <div>
            <Navbar/>
            <Link to='/details-projet' className="project-card"><p>Lorem ipsum dolor sit amet consectetur adip?</p>
            </Link>
            <SubscribeFooter/>
        </div>
    )
}

export default ListProject
