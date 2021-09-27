import React from 'react';
import ConnectFooter from '../../components/footer/ConnectFooter'
import Navbar from '../../components/Navbar';
import "./CreateIdea.css";


function CreateIdea() {
    return (
        <div>
            <ConnectFooter/> 
            <form className="create-idea" >
                <label>Titre de votre idée : </label>
                <input className="idea-form-title" name="title" type="textarea"/>
                <label className="categorie-label">Catégorie : </label>
                <select className="categorie-list" name="categorieList" id="selectList">
                <option value=""> -- Choisir une catégorie -- </option>
                    <option value="option 1">Ecologie</option>
                    <option value="option 2">Social</option>
                    <option value="option 3">Tech</option>
                </select>
                <label className="img-label"> Image (facultatif) : </label>
                <input className="idea-form-img" name="image" type="file"/>
                <label>Description détaillée : </label>
                <textarea className="idea-form-desc" name="desc" type="textarea" placeholder="Ceci est la description"/>
                <input className="create-idea_submit-btn" type="submit"/>
            </form>
            <Navbar/>
          </div>
    )
}

export default CreateIdea
