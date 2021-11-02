import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Footer from '../../components/footer/Footer'
import ProjectsCard from '../../components/ProjectsCard.jsx'
import Header from '../../components/Header'
import './ListProject.css'

function ListProject() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:8000/api/projects/projectowner")
        .then((res) => res.data)
        .then((data) => setProjects(data))        
    }, [])
    
    return (

        <div>
            <Header/>
                <div className="projects-container">
                {projects
                .map ((project) =>
                <div key={project.id}>
                    <ProjectsCard project={project}/>
                </div>
                )}
            </div>
            <Footer/>
        </div>
    )
}

export default ListProject
