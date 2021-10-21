import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import {useState} from 'react'
import axios from 'axios';

import "./Modal.css"


const Modal = ({ isShowing, hide, title,handleInputChange,createUser,user, ...props }) =>

  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                <button 
                    type="button"
                    className="modal-close-button"
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
                  <h4 className="revoila">{title}</h4>
                </div>
                <div className="modal-body">{props.children}</div>

                <div>
                <div className="title_bienvenue">Crée un compte</div>
            <div className="phrase_bienvenue">Bienvenue sur pep'idea</div>
            
          {/* <form onSubmit={createUser}>
            <div className="form-group-email-inscription">
            <p className="form-group-mail-p-inscription">Email</p>
            <input type="email" id="email_register" onChange={(e) => handleInputChange(e)} value={user.email} />
            </div>
            <div className="form-group-mdp">
                <p className="form-group-mdp-p-inscription">Mot de passe</p>
                <input type="password" id="password_register" onChange={(e) => handleInputChange(e)} value={user.password} />
            </div>
            <div className="form-group-mdp">
                <p className="form-group-mdp-p-inscription-confirmation">Confirmer mot de passe</p>
                <input type="password" id="confirmpassword_register" onChange={(e) => handleInputChange(e)} value={user.confirm_password} />
            </div>
            <div className="form-group-bouton-inscription">
      
              <button className="bouton_inscription">S'inscrire</button>
            </div>
          </form> */}
                </div>
              </div>
            </div>
          </div>
        
       
          </>,
        document.body
      )
    : null;
  
Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Modal;