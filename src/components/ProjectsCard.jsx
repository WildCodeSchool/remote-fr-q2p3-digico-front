import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import axios from 'axios'
import clapsIcon from '../Assets/icons/clapsIcon.png';
import groupIcon from '../Assets/icons/groupIcon.png';
import emptyHeartIcon from '../Assets/icons/emptyHeartIcon.png';
import './ProjectsCard.css'

function ProjectsCard( {project} ) {
    const url = `http://localhost:8000/api/projects/${project.id}`
    const [claps, setClaps] = useState();

    useEffect(() => {
        axios
        .get(url)
        .then((res) => {
            setClaps(res.data.claps)
        })
    }, [])

    const updateClaps = () => {
        const newClaps = claps + 1
        axios.put(url, {
            claps: newClaps
        })
        .then((res) => {
            const newClap = res.data.claps
            setClaps(newClap);
        })
    }

    return (
        <div className="ProjectsCard">
            <div className="img_container">
                <Link to={{pathname: `/projets/${project.id}`}} className="project-card">
                    <img className="project_img" src={project.img} alt={project.title}/>
                    <div className="arrow_to_details">
                        <FaArrowRight />
                    </div>
                </Link>
            </div>
            <div className="project_icons">
                <div className="left_project_icons">
                    <img src={clapsIcon} alt="clapsIcon" onClick={updateClaps}/>
                    {claps > 0 && <span className="claps_counter">{claps}</span>}
                    <img src={emptyHeartIcon} alt="emptyHeartIcon" class="heartIcons"/>
                </div>
                <div className="right_project_icons">
                    <span className="contributors_count">/ {project.contributors}</span>
                    <img src={groupIcon} alt="groupeIcon"/>
                </div>
            </div>
            <div className="project_info">
                <div className="project_titles">
                    <li>{project.title}</li>
                    <li className="user_pseudo">{project.pseudonym}</li>
                </div>
                <div className="short_desc_project">
                    <p>{project.description}</p>
                </div>
                <div className="show_more">
                    <span>En savoir plus...</span>
                </div>
            </div>
            <div className="project_icons">
            </div>
        </div>
    )
}

export default ProjectsCard
