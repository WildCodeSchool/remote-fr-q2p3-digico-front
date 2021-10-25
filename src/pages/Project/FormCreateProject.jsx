import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProjectFormModal from '../../components/ProjectFormModal.jsx';

import Header from '../../components/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import cross from '../../assets/icons/cross.png';
import './FormCreateProject.css'

function FormCreateProject() {
    const url = "http://localhost:8000/api/projects"
    const { register, handleSubmit } = useForm();
    const [ category, setCategory] = useState("");
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('');
    const [uploadedFile, setUploadedFile] = useState({});
    const [modalOpen, setModalOpen] = useState(false);

    const handleChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
      };

    const onSubmit = async e => {
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
    
    const [ project, setProject] = useState({
        title : "",
        description : "",
        socials : "",
        img : "",
        localisation : "",
        project_date : "",
        claps: "",
        contributors : "",
        user_id: ""
    })

    const createProject = e => {
        axios.post(url, {
            title: project.title,
            description: project.description,
            socials : project.socials,
            img : uploadedFile.filePath,
            contributors: project.contributors,
            category: category,
            localisation : project.localisation,
            project_date : project.project_date,
            user_id: project.user_id
        })
    }

    function handleInputChange(e) {
        const newProject = { ...project}
        newProject[e.target.id] = e.target.value
        setProject(newProject)
    }

    const submitForm = () => {
        onSubmit();
        createProject();
    }

    return (
        <div className="CreateProject">
            <div className="modalBg">
                <div className="FormModal">
                    {modalOpen && <ProjectFormModal setOpenModal={setModalOpen}/>}
                </div>
            </div>
            <Header/>
            <form onSubmit={handleSubmit(createProject)} className="project_form">
                <div className="head_Pform">
                    <p className="title_Pform">Création de projet</p>
                    <Link to={{pathname: `/liste-projet`}} className="link_list">
                        <p className="cancel_Pform">annuler</p>
                        <img src={cross} alt="cross"/>
                    </Link>
                </div>
                <div>
                    <input {...register("img")} type='file' className='fileUp' onChange={handleChange} />
                </div>
                {uploadedFile ? (
                    <div className="preview_container">
                        <img className="image_preview" src={uploadedFile.filePath} alt="" />
                    </div>
                ) : null}
                <input type="button" className="uploadBtn" value="Télécharger l'image" onClick={onSubmit}/>
                <div className="project_form">
                    <div className="container_Pform">
                    <div className="input_label_Pform">
                            <label className="label_Pform">Titre du projet</label>
                            <input
                                type="text" 
                                {...register("title")}
                                id="title" 
                                onChange ={(e) => handleInputChange(e)} 
                                value={project.title}
                                className = "input_Pform"
                                />
                        </div>
                    <div className="input_label_Pform">
                        <label className="label_Pform">Catégorie</label>
                        <select id="category" 
                                onChange={(e) => setCategory(e.target.value)}
                                value={category}
                                className="input_Pform">
                            <option value="option 1"></option>
                            <option  value="Ecologie">Ecologie</option>
                            <option  value="Social">Social</option>
                            <option  value="Technologie">Tech</option>
                        </select>
                    </div>
                    <div className="input_label_Pform">
                        <label className="label_Pform">Localisation</label>
                        <input 
                            type="text"
                            {...register("localisation")}
                            id="localisation" 
                            onChange ={(e) => handleInputChange(e)} 
                            value={project.localisation}
                            placeholder=""
                            className = "input_Pform"/>
                    </div>
                    <div className="input_label_Pform">
                        <label className="label_Pform">Description</label>
                        <textarea 
                            type="text"
                            {...register("description")} 
                            id="description"
                            className = "desc_Pform"
                            onChange ={(e) => handleInputChange(e)} 
                            value={project.description}>
                        </textarea>
                    </div>
                    <div className="input_label_Pform">
                        <label className="label_Pform">Date</label>
                        <input 
                            type="date"
                            {...register("project_date")}
                            id="project_date"
                            onChange ={(e) => handleInputChange(e)} 
                            value={project.project_date}
                            className = "input_Pform" />
                    </div>
                    <div className="input_label_Pform">
                        <label className="label_Pform">Réseaux Sociaux</label>
                        <input 
                        type="text"
                        {...register("socials")}
                        id="socials"
                        onChange ={(e) => handleInputChange(e)} 
                        value={project.socials}
                        className = "input_Pform"/>
                    </div>
                    <div className="input_label_Pform">
                        <label className="label_Pform" for="contributors">Nombre de contributeurs nécessaires</label>
                        <input
                            type="number"
                            {...register("contributors")}
                            id="contributors"
                            onChange ={(e) => handleInputChange(e)}
                            value={project.contributors}
                            className = "input_Pform"/>
                        <label className="label_Pform" for="user_id">User ID</label>
                        <input
                            type="number"
                            {...register("user_id")}
                            id="user_id"
                            value={project.user_id}
                            onChange ={(e) => handleInputChange(e)}
                            className = "input_Pform" />
                    </div>
                    <div>
                        <button 
                            onSubmit={submitForm}
                            onClick={() => {
                                setModalOpen(true);
                            }}
                            className="submitBtn_Pform">Publier
                        </button>
                    </div>
                    </div>
                </div>
            </form>
            <Footer/>
        </div>
    )
}

export default FormCreateProject
