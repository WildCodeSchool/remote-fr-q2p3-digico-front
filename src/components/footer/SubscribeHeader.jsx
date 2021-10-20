import {useState} from 'react'
import axios from 'axios';
import './SubscribeHeader.css'
import useModal from '../UseModal';
import Modal from '../Modal';


function SubscribeHeader() {

    const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();
    const {
        isShowing: isRegistrationFormShowed,
        toggle: toggleRegistrationForm
      } = useModal();
      const url = "http://localhot:8000/api/users"
const [user, setUser] = useState({
    email: "",
    password: "",
    confirmpassword:"",
})

const createUser = e => {
    e.preventDefault();
    axios.post(url, {
        email: user.email,
        password: user.password,
        confirmpassword: user.confirm_password,
    })
    alert("vous êtes bien enregistré(e)")
}

    function handleInputChange(e) {
        const newUser = {...user}
        newUser [e.target.value] = e.target.value 
        setUser(newUser)
    }



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
              <input type="text" id="email" onChange={(e) => handleInputChange(e)} value={user.email} placeholder="email"/>
            </div>
            <div className="form-group-mdp">
                <p className="form-group-mdp-p">Mot de passe</p>
                <input type="text" id="password" onChange={(e) => handleInputChange(e)} value={user.password} placeholder="password"/>
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
            
          <form onSubmit={createUser}>
            <div className="form-group-email-inscription">
            <p className="form-group-mail-p-inscription">Email</p>
            <input type="text" id="email" onChange={(e) => handleInputChange(e)} value={user.email} placeholder="email"/>
            </div>
            <div className="form-group-mdp">
                <p className="form-group-mdp-p-inscription">Mot de passe</p>
                <input type="text" id="password" onChange={(e) => handleInputChange(e)} value={user.password} placeholder="password"/>
            </div>
            <div className="form-group-mdp">
                <p className="form-group-mdp-p-inscription-confirmation">Confirmer mot de passe</p>
                <input type="text" id="confirmpassword" onChange={(e) => handleInputChange(e)} value={user.confirm_password} placeholder="confirm_password"/>
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
      
    )
}

export default SubscribeHeader
