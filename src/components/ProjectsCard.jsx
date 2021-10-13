import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegHandPaper, FaHeart, FaArrowRight } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';

import './ProjectsCard.css'

function ProjectsCard( {project} ) {
    
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
            <div className="project_info">
                <div className="project_titles">
                    <li>{project.title}</li>
                    <li>{project.pseudonym}</li>
                </div>
                <div className="short_desc_project">
                    <p>{project.description}</p>
                </div>
            </div>
            <div className="project_icons">
                <FaRegHandPaper />
                <HiUserGroup />
                <FaHeart />
            </div>
        </div>
    )
}

export default ProjectsCard
