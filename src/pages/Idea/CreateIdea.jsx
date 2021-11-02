import Header from '../../components/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import Vector from '../../assets/Vector.png'
import "./CreateIdea.css";

function CreateIdea() {
  let history = useHistory();
  const url = "http://localhost:8000/api/ideas"
  const [category, setCategory] = useState("")
  const [idea, setIdea] = useState({
    title: "",
    description: "",
    idea_date: "",
    user_id: "",
  }) 

  const createIdea = e => {
    e.preventDefault();
    axios.post(url,{
      title: idea.title,
      category: category,
      description: idea.description,
      idea_date: new Date().toLocaleDateString('fr-FR'),
      user_id: idea.user_id
    })
    alert("Votre idée a été crée.")
    history.push('/liste-idee')
  }
 
  function handleInputChange(e) {
    const newIdea= {...idea}
    newIdea[e.target.id] = e.target.value
    setIdea(newIdea)
  }

    return (
      <div className="idea_form">
        <Header/>
        <div className="create-idea-top">
          <p className="create_idea_title">Création d'idée</p>
          <p className="create-idea-cancel">annuler  <Link to='/liste-idee'><img className="create-idea-cross" src={Vector}/></Link></p>
        </div>
        <form className="create-idea" onSubmit={createIdea}>
          <label className="create-idea-label">Titre de votre idée : </label>
          <input required className="idea-form-title" name="title" id="title" type="textarea" onChange={(e) => handleInputChange(e)} value={idea.title}/>
          <label className="create-idea-label">Catégorie : </label>
          <select required className="categorie-list-idea" name="categorieList" id="category" onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value=""> -- Choisir une catégorie -- </option>
                   <option value="Ecologie">Ecologie</option>
                   <option value="Social">Social</option>
              <option value="Tech">Tech</option>
              <option value="Tech">Divers</option>
          </select>
          <label className="create-idea-label">Description détaillée : </label>
          <textarea required className="idea-form-desc" name="desc" id="description" type="textarea" onChange={(e) => handleInputChange(e)} value={idea.description}/>
          <label className="create-idea-label" for="user"> <br/>User ID :</label>
          <input required type="number" id="user_id" onChange ={(e) => handleInputChange(e)} value={idea.user_id} className="contributors_input"/> 
          <input className="create-idea_submit-btn" type="submit" value="Publier"/>
        </form>
        <Footer/>
      </div>
    )
}

export default CreateIdea