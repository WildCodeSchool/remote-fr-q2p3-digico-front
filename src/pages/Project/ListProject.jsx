import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar.jsx'
import SubscribeFooter from "../../components/footer/SubscribeFooter.jsx"
import {Link} from 'react-router-dom'
import './ListProject.css'

function ListProject() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/projects")
        .then((res) => res.data)
        .then((data) => setProjects(data))        
    }, [])
    return (
        <div>
            <Navbar/>
            <Link to='/details-projet' className="project-card">
                <div className="projects">
                    {projects
                    .map ((project) =>
                    <div key={project.id} classname="project-container">
                        <img src= {project.img} />

                    </div>
                    
                    )}

                </div>
            </Link>
            
            <SubscribeFooter/>
        </div>
    )
}

export default ListProject
