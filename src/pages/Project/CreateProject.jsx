import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import Header from '../../components/Header.jsx';
import Footer from '../../components/footer/Footer.jsx'
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

            <Header/>

            

            <form onSubmit={handleSubmit(createProject)} className="project_form">
                <div className="head_Pform">
                    <div className = "head_left_Pform">
                        <input 
                            type="file" {...register("img")}
                            className = "imgInput"
                            id="img" 
                            onChange ={(e) => handleInputChange(e)} 
                            value={project.img} 
                            placeholder="Image"/>
                    </div>
                    <div className="head_right_Pform">
                        <input 
                            type="text" {...register("title")}
                            className = "title_input"
                            id="title" 
                            onChange ={(e) => handleInputChange(e)} 
                            value={project.title} 
                            placeholder="* Titre du projet :"/>
                        <input 
                            type="text" {...register("localisation")}
                            className="localisation_input"
                            id="localisation" 
                            onChange ={(e) => handleInputChange(e)} 
                            value={project.localisation} 
                            placeholder="Localisation :"/>
                        <input 
                            type="date" {...register("project_date")} 
                            id="project_date"
                            className = "date_selector"
                            onChange ={(e) => handleInputChange(e)} 
                            value={project.project_date} 
                            placeholder="Date"/>
                    </div>
                </div>
                <div className="body_Pform">
                    <textarea 
                        type="text" {...register("description")} 
                        id="description"
                        className="desc_text"
                        onChange ={(e) => handleInputChange(e)} 
                        value={project.description} 
                        placeholder="* Description :"></textarea>
                    <input 
                        type="text" {...register("socials")} 
                        id="socials"
                        className = "socials_input"
                        onChange ={(e) => handleInputChange(e)} 
                        value={project.socials} 
                        placeholder="@ Réseaux Sociaux:"/>
                    <select className="categorie-list-project">
                        <option className=""value="="> -- Choisir une catégorie -- </option>
                        <option value="option 1">Ecologie</option>
                        <option value="option 2">Social</option>
                        <option value="option 3">Tech</option>
                    </select>
                    <div className="contributors">
                        <label for="contributors">Contributeurs nécessaires :</label>
                        <input
                            type="number"
                            id="contributors"
                            className="contributors_input"
                        />
                    </div>
                </div>
                <button className="create-project_submit-btn">Publier</button>
            </form> 

            <Footer/>

          

        </div>

            
    )
}

export default CreateProject
