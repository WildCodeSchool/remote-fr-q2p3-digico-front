import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import clapsIcon from '../../../Assets/icons/clapsIcon.png'
import emptyHeartIcon from '../../../Assets/icons/emptyHeartIcon.png'
import groupIcon from '../../../Assets/icons/groupIcon.png'
import { Link } from 'react-router-dom';
import "./UserProject.css"

function UserProject(props) {
    return (
        <div>
            <div className="ProjectsCard">
            <div className="img_container">
                <Link to={{pathname: `/projets/${props.project.id}`}} className="project-card">
                    <img className="project_img" src={props.project.img} alt={props.project.title}/>
                    <div className="arrow_to_details">
                        <FaArrowRight />
                    </div>
                </Link>
            </div>
            <div className="project_icons">
                <div className="left_project_icons">
                    <img src={clapsIcon} alt="clapsIcon"/>
                    <span className="claps_counter">{props.project.claps}</span>
                    <img src={emptyHeartIcon} alt="emptyHeartIcon" class="heartIcons"/>
                </div>
                <div className="right_project_icons">
                    <span className="contributors_count">/ {props.project.contributors}</span>
                    <img src={groupIcon} alt="groupeIcon"/>
                </div>
            </div>
            <div className="project_info">
                <div className="project_titles">
                    <li>{props.project.title}</li>
                    <li className="user_pseudo">{props.project.pseudonym}</li>
                </div>
                <div className="short_desc_project">
                    <p>{props.project.description}</p>
                </div>
                <div className="show_more">
                    <span>En savoir plus...</span>
                </div>
            </div>
            <div className="project_icons">
            </div>
        </div>
        </div>
    )
}

export default UserProject
