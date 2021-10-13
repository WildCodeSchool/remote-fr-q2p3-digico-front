import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import ConnectFooter from '../../components/footer/ConnectFooter'
import Navbar from '../../components/Navbar.jsx'
import FileUpload from './FileUpload';

import "./CreateProject.css"

function CreateProject() {
    const url = "http://localhost:8000/api/projects"
    const { register, handleSubmit } = useForm();
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('');
    const [uploadedFile, setUploadedFile] = useState({});
    
    const [ project, setProject] = useState({
        title : "",
        description : "",
        socials : "",
        img : "",
        localisation : "",
        project_date : "",
        user_id: ""
    })
    
    const createProject = e => {
        axios.post(url, {
            title: project.title,
            description: project.description,
            socials : project.socials,
            img : uploadedFile.filePath,
            localisation : project.localisation,
            project_date : project.project_date,
            user_id: project.user_id
        })
        alert("Votre projet à été créé 🚀")
    }
    
    const onChange = e => {
          setFile(e.target.files[0]);
          setFilename(e.target.files[0].name);
        };
      
        const onSubmit = async e => {
        //   e.preventDefault();
          const formData = new FormData();
          formData.append('file', file);
      
          try {
            const res = await axios.post('http://localhost:8000/api/projects/upload', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            const { fileName, filePath } = res.data;
            setUploadedFile({ fileName, filePath });
          } catch (err) {
            console.log(err)
          }
        };

    const submitForm = () => {
        onSubmit();
        createProject();
        
    }
       
    function handleInputChange(e) {
        const newProject = { ...project}
        newProject[e.target.id] = e.target.value
        setProject(newProject)
    }

    return (
        <div className="CreateProject">
            <ConnectFooter/>
            <form onSubmit={handleSubmit(submitForm)} className="project_form">
                <div className="head_Pform">
                    <div className = "head_left_Pform">
                        <FileUpload 
                        method={(e) => {e.preventDefault(); onSubmit()}}
                        value={file}
                        onChange={(e) => {onChange(e)}}
                        fileName={uploadedFile.fileName}
                        filePath={uploadedFile.fileName}
                    />
                        {/* <input 
                            type="file"
                            className = "imgInput"
                            id="imgFile" 
                            onChange ={onChange} 
                            value={project.img}
                            placeholder="Image"/>
                            <label>{filename}</label>
                        <input type='submit' value='Télécharger'/> */}
                    </div>
                    
                    <div className="head_right_Pform">
                        <input 
                            type="text" {...register("title")}
                            className = "title_input"
                            id="title" 
                            onChange ={(e) => handleInputChange(e)} 
                            value={project.title}
                            required
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
                        required
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
                        <label for="user"> <br/>User ID :</label>
                        <input
                            type="number" {...register("user_id")}
                            id="user_id"
                            onChange ={(e) => handleInputChange(e)}
                            value={project.user_id}
                            className="contributors_input"
                        />
                    </div>
                </div>
                <button className="create-project_submit-btn">Publier</button>
            </form> 
            <Navbar/>
        </div>

            
    )
}

export default CreateProject
