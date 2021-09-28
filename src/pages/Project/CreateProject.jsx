import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import ConnectFooter from '../../components/footer/ConnectFooter'

import "./CreateProject.css"

function CreateProject() {
    const url = "http://localhost:8000/api/projects/projectowner"
    const { register, handleSubmit } = useForm();

    const [ project, setProject] = useState({
        title : "",
        description : "",
        socials : "",
        img : "",
        localisation : "",
        project_date : ""
    })

    const createProject = e => {
        axios.post(url, {
            title: project.title,
            description: project.description,
            socials : project.socials,
            img : project.img,
            localisation : project.localisation,
            project_date : project.project_date
        })
        alert("Votre projet à été créé 🚀")
    }
    
    function handleInputChange(e) {
        const newProject = { ...project}
        newProject[e.target.id] = e.target.value
        setProject(newProject)
    }

    return (
        <div className="CreateProject">
            <form onSubmit={handleSubmit(createProject)}>
                <div className="head_Pform">
                    <div className = "head_left_Pform">
                        <input type="text" {...register("img")} id="img" onChange ={(e) => handleInputChange(e)} value={project.img} placeholder="Image"/>
                    </div>
                    <div className="head_right_Pform">
                        <input type="text" {...register("title")} id="title" onChange ={(e) => handleInputChange(e)} value={project.title} placeholder="Title"/>
                        <input type="text" {...register("localisation")} id="localisation" onChange ={(e) => handleInputChange(e)} value={project.localisation} placeholder="Localisation"/>
                        <input type="date" {...register("project_date")} id="project_date" onChange ={(e) => handleInputChange(e)} value={project.project_date} placeholder="Date"/>
                    </div>
                </div>
                <div className="body_Pform">
                    <textarea type="text" {...register("description")} id="description" onChange ={(e) => handleInputChange(e)} value={project.description} placeholder="Description"></textarea>
                    <input type="text" {...register("socials")} id="socials" onChange ={(e) => handleInputChange(e)} value={project.socials} placeholder="Socials"/>
                </div>
                <input type="Publier"/>
                
            </form>
            <ConnectFooter/> 
        </div>

            
    )
}

export default CreateProject
