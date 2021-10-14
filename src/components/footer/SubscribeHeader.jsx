import React from 'react'
import "./SubscribeHeader"
// import {Link} from 'react-router-dom'
import './SubscribeHeader.css'
import useModal from '../UseModal';
import Modal from '../Modal';


function SubscribeHeader() {

    const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();
    const {
        isShowing: isRegistrationFormShowed,
        toggle: toggleRegistrationForm
      } = useModal();
    return (


        <div className="subscribeHeader">
        <button className="modal-toggle" onClick={toggleLoginForm}>
          Login
        </button>
        <button className="modal-toggle" onClick={toggleRegistrationForm}>
          Register
        </button>

        <Modal
          isShowing={isLoginFormShowed}
          hide={toggleLoginForm}
          title="Login"
        >
          <form>
            <div className="form-group">
              <input type="text" placeholder="Username" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Password" />
            </div>
            <div className="form-group">
              <input type="submit" value="Login" />
            </div>
          </form>
        </Modal>

        <Modal
          isShowing={isRegistrationFormShowed}
          hide={toggleRegistrationForm}
          title="Register"
        >
          <form>
            <div className="form-group">
              <input type="text" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Username" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Password" />
            </div>
            <div className="form-group">
              <input type="submit" value="Register" />
            </div>
          </form>
        </Modal>
      </div>

        // <div className="subscribeHeader_accueil">
        //    <div className="inscription"> 
        //     <Link to='/signup'  className="button_inscription_subscribe">Se connecter</Link>
        //     <Modal/>
        //     </div>
        //     <div className="connection">
        //     <Link to='/login'  className="button_connection_subscribe">S'inscrire</Link> 
        //     </div>
        //     </div>

        
                           
      
    )
}

export default SubscribeHeader
