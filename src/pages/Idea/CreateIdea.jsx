import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import ConnectFooter from '../../components/footer/ConnectFooter'
import Navbar from '../../components/Navbar';
import "./CreateIdea.css";


function CreateIdea() {
  let history = useHistory();
  const url = "http://localhost:8000/api/ideas"
  const [category, setCategory] = useState("")
  const [idea, setIdea] = useState({
    title: "",
    // category: "",
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
  // function handleCategory(e) {
  //   const newCategory
  // }
  function handleInputChange(e) {
    const newIdea= {...idea}
    newIdea[e.target.id] = e.target.value
    setIdea(newIdea)
  }

    return (
        <div>
            <ConnectFooter/> 
            <form className="create-idea" onSubmit={createIdea}>
                <label>Titre de votre idée : </label>
                <input required className="idea-form-title" name="title" id="title" type="textarea" onChange={(e) => handleInputChange(e)} value={idea.title}/>
                <label className="categorie-label">Catégorie : </label>
                <select required className="categorie-list-idea" name="categorieList" id="category" onChange={(e) => setCategory(e.target.value)} value={category}>
                <option value=""> -- Choisir une catégorie -- </option>
                    <option value="Ecologie">Ecologie</option>
                    <option value="Social">Social</option>
                    <option value="Tech">Tech</option>
                    <option value="Tech">Divers</option>
                </select>
                <label>Description détaillée : </label>
                <textarea required className="idea-form-desc" name="desc" id="description" type="textarea" onChange={(e) => handleInputChange(e)} value={idea.description}/>
                <label for="user"> <br/>User ID :</label>
                <input required type="number" id="user_id"
                  onChange ={(e) => handleInputChange(e)}
                  value={idea.user_id}
                  className="contributors_input"/> 
                <input className="create-idea_submit-btn" type="submit" value="Publier"/>
            </form>
            <Navbar/>
          </div>
    )
}

export default CreateIdea
