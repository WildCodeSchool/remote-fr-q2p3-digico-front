import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Navbar from '../../components/Navbar.jsx'
import SubscribeFooter from "../../components/footer/SubscribeFooter.jsx"
import ProjectsCard from '../../components/ProjectsCard.jsx'

import './ListProject.css'

function ListProject() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/projects/owner")
        .then((res) => res.data)
        .then((data) => setProjects(data))        
    }, [])
    return (
        <div> 
            <SubscribeFooter/>
            
                <div className="projects-container">
                    {projects
                    .map ((project) =>
                    <div key={project.id}>
                        <ProjectsCard project={project}/>
                    </div>
                    )}
                </div>
                <Navbar/>
        </div>
    )
}

export default ListProject
