import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
// import FileUpload from './FileUpload';
import cross from '../../assets/icons/cross.png';
import Header from '../../components/Header.jsx';
import Footer from '../../components/footer/Footer.jsx'

import "./CreateProject.css"

function CreateProject() {
    const url = "http://localhost:8000/api/projects"
    const { register, handleSubmit } = useForm();
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('');
    const [uploadedFile, setUploadedFile] = useState({});
    const [ category, setCategory] = useState("");
    const [ selectedImage, setSelectedImage ] = useState();
    
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
            img : uploadedFile.fileName,
            contributors: project.contributors,
            category: category,
            localisation : project.localisation,
            project_date : project.project_date,
            user_id: project.user_id
        })
        alert("Votre projet à été créé 🚀")
    }
      
    const onSubmit = async e => {
        e.preventDefault();
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

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
      };

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            // setSelectedImage(e.target.files[0]);
            setFile(e.target.files[0]);
            setFilename(e.target.files[0].name);
        }
    }

    const removeSelectedImage = () => {
        setSelectedImage();
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
                    <p className="title_Pform">Création de projet</p>
                    <p className="cancel_Pform">annuler <img src={cross} alt="cross"/></p>
                </div>
                <div className = "file_Pform">
                    <div className="choose_img">
                    {/* <FileUpload 
                        method={(e) => {e.preventDefault(); onSubmit()}}
                        value={file}
                        onChange={(e) => {onChange(e)}}
                        fileName={uploadedFile.fileName}
                        filePath={uploadedFile.fileName}
                    /> */}
                        <input
                            accept="image/*"
                            type="file" {...register("img")}
                            className = "imgInput"
                            id="img" 
                            // method={(e) => {e.preventDefault(); onSubmit()}}
                            onChange ={(e) => handleInputChange(e)}
                            // onChange= {imageChange}
                            onChange={(e) => {onChange(e)}}
                            value={uploadedFile.filePath} 
                            fileName={uploadedFile.fileName}
                            filePath={uploadedFile.fileName}
                            placeholder="Image"/>
                            <p className="import_Pform">Importer une image</p>
                            {file && (
                                <div>
                                    <img 
                                        src={URL.createObjectURL(file)}
                                        alt=""
                                        className="img_preview"
                                    />
                                    <img src={cross} className="cancel_img_preview" onClick={removeSelectedImage} />
                                </div>
                            )}
                        </div>
                </div>
                <div className="project_form">
                    <div className="container_Pform">
                        <div className="input_label_Pform">
                            <label className="label_Pform">Titre du projet</label>
                            <input 
                                type="text" {...register("title")}
                                className = "input_Pform"
                                id="title" 
                                onChange ={(e) => handleInputChange(e)} 
                                value={project.title} />
                        </div>
                        <div className="input_label_Pform">
                            <label className="label_Pform">Catégorie</label>
                            <select id="category" 
                                    onChange={(e) => setCategory(e.target.value)}
                                    value={category}
                                    className="input_Pform">
                                <option value="option 1"></option>
                                <option  value="option 2">Ecologie</option>
                                <option  value="option 3">Social</option>
                                <option  value="option 4">Tech</option>
                            </select>
                        </div>
                        <div className="input_label_Pform">
                            <label className="label_Pform">Localisation</label>
                            <input 
                                type="text" {...register("localisation")}
                                className="input_Pform"
                                id="localisation" 
                                onChange ={(e) => handleInputChange(e)} 
                                value={project.localisation} 
                                placeholder=""/>
                        </div>
                        <div className="input_label_Pform">
                            <label className="label_Pform">Description</label>
                            <textarea 
                                type="text" {...register("description")} 
                                id="description"
                                className="desc_Pform"
                                onChange ={(e) => handleInputChange(e)} 
                                value={project.description} >
                            </textarea>
                        </div>
                        <div className="input_label_Pform">
                            <label className="label_Pform">Date</label>
                            <input 
                                type="date" {...register("project_date")} 
                                id="project_date"
                                className = "input_Pform"
                                onChange ={(e) => handleInputChange(e)} 
                                value={project.project_date} 
                                />
                        </div>
                        <div className="input_label_Pform">
                            <label className="label_Pform">Réseaux Sociaux</label>
                            <input 
                            type="text" {...register("socials")} 
                            id="socials"
                            className = "input_Pform"
                            onChange ={(e) => handleInputChange(e)} 
                            value={project.socials} />
                        </div>
                        <div className="input_label_Pform">
                            <label className="label_Pform" for="contributors">Nombre de contributeurs nécessaires</label>
                            <input
                                type="number"
                                id="contributors"
                                className="input_Pform"
                                value={project.contributors}
                                onChange ={(e) => handleInputChange(e)}
                            />
                            <label className="label_Pform" for="contributors">User ID</label>
                            <input
                                type="number"
                                id="user_id"
                                value={project.user_id}
                                className="input_Pform"
                                onChange ={(e) => handleInputChange(e)}
                            />
                        </div>
                        <div>
                            <button onSubmit={submitForm} className="submitBtn_Pform">Publier</button>
                        </div>
                    </div>
                </div>
                <button className="create-project_submit-btn">Publier</button>
            </form> 
            <Footer/>
        </div>
            
    )
}

export default CreateProject
