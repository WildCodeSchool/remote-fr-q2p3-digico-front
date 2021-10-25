import {useState, useEffect} from 'react'
import Header from '../components/Header'
import {Link} from 'react-router-dom'
import "./Contribution.css"
import Footer from '../components/footer/Footer'
import Vector from '../../src/assets/Vector.png'
import axios from 'axios'



function Contribution(props) {
    const projectId = props.match.params.id
    const [project, setProject] = useState({});

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/projects/projectowner/${projectId}`)
        .then((res) => {
            setProject(res.data)
            console.log(res)
        })

    }, [projectId])

    return (
        <div className="container_contribution">
            <Header />
           <div className="header_projet_contrib">
            Je me propose
            
            <Link to='/liste-projet' className="annuler_contrib">annuler<img className="croix_annuler_contrib" src={Vector} alt="" /></Link>
            
            </div>
            
            <div className="project_titles_jmpropose">
                    <li>{project.title}</li>
                    </div>   
            <div className="form_contrib">
                
            <label className="dispo_contrib_start"> Mes disponibilités</label>
          
            <input className="date_contrib" type="date" />
            
            <label className="title_desc_contrib">Dis nous en plus</label>
            <textarea className="description_contribution" type="textarea"/>
            <button className="button_submit_contrib">Soumettre</button>

              
            
        </div>
        <Footer/>
        </div>
         
    )
}

export default Contribution
