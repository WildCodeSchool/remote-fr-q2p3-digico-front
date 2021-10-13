import {useState, useEffect} from 'react'
import Footer from '../../components/footer/Footer'
import ConnectFooterIdeas from "../../components/footer/ConnectFooterIdeas"
import axios from 'axios'
import {Link} from 'react-router-dom'
import "./DetailsProject.css"


function DetailsProject(props) {
    const projectId = props.match.params.id
    const [project, setProject] = useState({});
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/projects/${projectId}`)
        .then((res) => {
            setProject(res.data)
            console.log(res)
        })
    }, [projectId])
   
    return (
        <div>
            <ConnectFooterIdeas/>

                <div className="container_details_project">
                 <div className="image_details_projet">
                     <img src={project.img} alt={project.title} />
                 </div>
                    <div className="description_details_project">
                      <p className="project_title" >{project.title}</p> 
                      <p className="project_description">{project.description}</p> 
                      <p className="project_localisation">{project.localisation}</p>
                      <p className="project_project_date">{project.project_date}</p>

                    </div>
                        <Link to='/Contribution' className="button_contribution">CONTRIBUER</Link>
                             <div className="banner_details_project"></div>
                             <span>{project.socials}</span>
            <Footer/>
            </div>
            </div>
          
    )
}

export default DetailsProject
