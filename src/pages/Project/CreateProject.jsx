import React from 'react'
import {Link} from 'react-router-dom'
import ConnectFooter from '../../components/footer/ConnectFooter'
import Navbar from '../../components/Navbar.jsx'


import "./CreateProject.css"

function CreateProject() {
    return (
        <div>
            <ConnectFooter/> 
            Ceci est la création de projet
            <Navbar/>
        </div>

            
    )
}

export default CreateProject
