import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegHandPaper, FaHeart, FaArrowRight } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import axios from 'axios'

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
                <Link to='/details-projet' className="project-card">
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
                <span className="three_dots">. . .</span>
            </div>
            <div className="project_icons">
                <div className="claps">
                    <FaRegHandPaper onClick={updateClaps}/>
                    {claps > 0 && <span>{claps}</span>}
                </div>
                <HiUserGroup />
                <FaHeart />
            </div>
        </div>
    )
}

export default ProjectsCard
