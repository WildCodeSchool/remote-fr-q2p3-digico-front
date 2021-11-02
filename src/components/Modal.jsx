import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

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