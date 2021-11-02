import {useState, useEffect} from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header'
import axios from 'axios'
import {Link} from 'react-router-dom'
import clapsIcon from '../../assets/icons/clapsIcon.png'
import groupIcon from '../../assets/icons/groupIcon.png';
import emptyHeartIcon from '../../assets/icons/emptyHeartIcon.png';
import vector from '../../assets/icons/vector.png';
import "./DetailsProject.css"


function DetailsProject(props) {
    const projectId = props.match.params.id
    const [project, setProject] = useState({});
    const [claps, setClaps] = useState();

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/projects/projectowner/${projectId}`)
        .then((res) => {
            setProject(res.data)
            setClaps(res.data.claps)
            console.log(res.data)
        })
    }, [projectId])
        
    const updateClaps = () => {
            const newClaps = claps + 1
            axios.put(`http://localhost:8000/api/projects/${projectId}`, {
                claps: newClaps
            })
            .then((res) => {
                const newClap = res.data.claps
                setClaps(newClap);
            })
        }
  
    
    return (
        <div>
            <Header/>
            <div className="ProjectsCard_details">
                <div className="img_container_details">
                    <div className="project-card_details">
                    <Link to='/liste-projet' className="vector_details"><img src={vector} alt="" /></Link>
                        <img className="project_img_details" src={project.img} alt={project.title}/>
                    </div>
                </div>
            <div className="container_projet_details">
                <div className="project_icons_details">
                    <div className="left_project_icons_details">
                        <img src={clapsIcon} alt="clapsIcon" onClick={updateClaps}/>
                        {claps > 0 && <span className="claps_counter_details">{claps}</span>}
                        <img src={emptyHeartIcon} alt="emptyHeartIcon" class="heartIcons_details"/>
                    </div>
                    <div className="right_project_icons_details">
                        <span className="contributors_count_details">/ {project.contributors}</span>
                        <img src={groupIcon} alt="groupeIcon"/>
                    </div>
                </div>
                <div className="project_info_details">
                    <div className="project_titles_details">
                        <li>{project.title}</li>
                        <li className="user_pseudo_details">{project.pseudonym}</li>
                    </div>
                    <div className="barre"></div>
                    <div className="desc_project_details">
                        <p>{project.description}</p>
                    </div>
                    <Link to='/Contribution' className="button_contribution">Je me propose</Link>
                </div>
            </div>   
            </div>
            <Footer/>
        </div>
    )
}

export default DetailsProject

