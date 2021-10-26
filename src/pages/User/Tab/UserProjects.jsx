import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import clapsIcon from '../../../Assets/icons/clapsIcon.png'
import emptyHeartIcon from '../../../Assets/icons/emptyHeartIcon.png'
import groupIcon from '../../../Assets/icons/groupIcon.png'

import './UserProjects.css'

function UserProjects(props) {
    
    const [userProjects, setUserProjects] = useState("");
    const userId = props.match.params.id;

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/users/${userId}/projects`)
        .then((res) => res.data)
        .then((data) => setUserProjects(data))
    },[userId])
    

    return (
        <div className="ProjectsCard">
            <div className="img_container">
                <Link to={{pathname: `/projets/${userProjects.id}`}} className="project-card">
                    <img className="project_img" src={userProjects.img} alt={userProjects.title}/>
                    <div className="arrow_to_details">
                        <FaArrowRight />
                    </div>
                </Link>
            </div>
            <div className="project_icons">
                <div className="left_project_icons">
                    <img src={clapsIcon} alt="clapsIcon"/>
                    <span className="claps_counter">{userProjects.claps}</span>
                    <img src={emptyHeartIcon} alt="emptyHeartIcon" class="heartIcons"/>
                </div>
                <div className="right_project_icons">
                    <span className="contributors_count">/ {userProjects.contributors}</span>
                    <img src={groupIcon} alt="groupeIcon"/>
                </div>
            </div>
            <div className="project_info">
                <div className="project_titles">
                    <li>{userProjects.title}</li>
                    <li className="user_pseudo">{userProjects.pseudonym}</li>
                </div>
                <div className="short_desc_project">
                    <p>{userProjects.description}</p>
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

export default UserProjects
