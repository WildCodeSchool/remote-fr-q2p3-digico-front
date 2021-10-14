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
        <div className="modal-toggle_connecter" onClick={toggleLoginForm}>
          Se connecter
        </div>
        <div className="modal-toggle_inscrire" onClick={toggleRegistrationForm}>
          S'inscrire
        </div>

        <Modal className="modal"
          isShowing={isLoginFormShowed}
          hide={toggleLoginForm}
         
         
          
          
        >
            <div className="title_heureux">Ha, te revoila!</div>
            <div className="phrase_heureux">Nous sommes heureux de te revoir!</div>
          <form className="encart">
            <div className="form-group-mail">
                <p className="form-group-mail-p">Email</p>
              <input type="text"  />
            </div>
            <div className="form-group-mdp">
                <p className="form-group-mdp-p">Mot de passe</p>
              <input type="text"  />
            </div>
            <div className="form-group-bouton">
      
              <button className="bouton_connection">Se connecter</button>
            </div>

          </form>
          <div className="phrase-redirection">
            <p className="no-account">Besoin d'un compte ?</p>
            <div className="pas-compte"
            onClick={toggleRegistrationForm} > S'inscrire
          </div>
          </div>
        </Modal>

        <Modal
          isShowing={isRegistrationFormShowed}
          hide={toggleRegistrationForm}
          
          
          
        >
            <div className="title_bienvenue">Crée un compte</div>
            <div className="phrase_bienvenue">Bienvenue sur pep'idea</div>
          <form>
            <div className="form-group-email-inscription">
            <p className="form-group-mail-p-inscription">Email</p>
              <input type="text"  />
            </div>
            <div className="form-group-mdp">
                <p className="form-group-mdp-p-inscription">Mot de passe</p>
              <input type="text"  />
            </div>
            <div className="form-group-mdp">
                <p className="form-group-mdp-p-inscription-confirmation">Confirmer mot de passe</p>
              <input type="text"  />
            </div>
            <div className="form-group-bouton-inscription">
      
              <button className="bouton_inscription">S'inscrire</button>
            </div>
          </form>
          
            
            <div className="deja-compte"
            onClick={toggleLoginForm} > Tu as déjà un compte ?
          </div>
          
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
