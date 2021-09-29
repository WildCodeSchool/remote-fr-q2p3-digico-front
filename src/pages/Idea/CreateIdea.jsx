import React from 'react';
import ConnectFooter_ideas from '../../components/footer/ConnectFooter_ideas.jsx';
import Navbar from '../../components/Navbar';
import "./CreateIdea.css";


function CreateIdea() {
    return (
        <div>
            <ConnectFooter_ideas/> 
            <form className="create-idea" >
                <label>Titre de votre idée : </label>
                <input className="idea-form-title" name="title" type="textarea"/>
                <label className="categorie-label">Catégorie : </label>
                <select className="categorie-list-idea" name="categorieList" id="selectList">
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
