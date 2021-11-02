import React from 'react'
import { Link } from 'react-router-dom';
import './ProjectFormModal.css'

function ProjectFormModal( {setOpenModal} ) {
    return (
        <div className="projectFormModal">
            <div className="modalContainer">
                <div className="projectModalTxt">
                    <p className="modalTitle">Votre projet à bien été publier !</p>
                    <p className="modalText">merci pour votre contribution !</p>
                </div>
                <Link to={{pathname: `/liste-projet`}} style={{ textDecoration: 'none' }}className="projectModalBtn">
                    <p className="oktxt">ok</p>
                </Link>
            </div>
        </div>
    )
}

export default ProjectFormModal
