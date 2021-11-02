import {useState, useRef} from 'react'
import axios from 'axios';
import './SubscribeHeader.css'
import useModal from '../UseModal';
import Modal from '../Modal';
import {useForm} from 'react-hook-form'

function SubscribeHeader() {
    const { register, handleSubmit, watch} = useForm();
    const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();
    const {
        isShowing: isRegistrationFormShowed,
        toggle: toggleRegistrationForm
      } = useModal();
    const url = "http://localhost:8000/api/users/register"
    const [user, setUser] = useState({
        email: "",
        password: "",
        confirm_password:"",
    })
    const createUser = e => {
      axios.post(url, {
          email: user.email,
          password: user.password,
          confirm_password: user.confirm_password,
      })
      alert("vous êtes bien enregistré(e)")
    }

    function handleInputChange(e) {
        const newUser = {...user}
        newUser[e.target.id] = e.target.value 
        setUser(newUser)
    }

    return (
      <div className="subscribeHeader">
        <div className="modal-toggle_connecter" onClick={toggleLoginForm}>Se connecter</div>
        <div className="modal-toggle_inscrire" onClick={toggleRegistrationForm}>S'inscrire</div>
          <Modal className="modal"
            isShowing={isLoginFormShowed}
            hide={toggleLoginForm}
          >
          <div className="title_heureux">Ha, te revoila!</div>
          <div className="phrase_heureux">Nous sommes heureux de te revoir!</div>
          <form className="encart">
            <div className="form-group-mail">
              <p className="form-group-mail-p">Email</p>
              <input className="inputSubscribeHeader" type="text" id="email" onChange={(e) => handleInputChange(e)} value={user.email} />
            </div>
            <div className="form-group-mdp">
                <p className="form-group-mdp-p">Mot de passe</p>
                <input className="inputSubscribeHeader" type="password" id="password" onChange={(e) => handleInputChange(e)} value={user.password} />
            </div>
            <div className="form-group-bouton">
              <button className="bouton_connection">Se connecter</button>
            </div>
          </form>
          <div className="phrase-redirection">
            <p className="no-account">Besoin d'un compte ?</p>
            <div className="pas-compte"onClick={toggleRegistrationForm}>S'inscrire</div>
          </div>
        </Modal>
        <Modal
          isShowing={isRegistrationFormShowed}
          createUser={createUser}
          handleInputChange={handleInputChange}
          user={user}
          hide={toggleRegistrationForm}
        >
          <div className="title_bienvenue">Crée un compte</div>
          <div className="phrase_bienvenue">Bienvenue sur pep'idea</div>
          <form onSubmit={handleSubmit(createUser)}>
            <div className="form-group-email-inscription">
              <p className="form-group-mail-p-inscription">Email</p>
              <input className="inputSubscribeHeader" type="email" {...register("email")} id="email" onChange={(e) => handleInputChange(e)} value={user.email} />
            </div>
            <div className="form-group-mdp">
              <p className="form-group-mdp-p-inscription">Mot de passe</p>
              <input className="inputSubscribeHeader" type="password"{...register("password")}  id="password" onChange={(e) => handleInputChange(e)} value={user.password} />
            </div>
            <div className="form-group-mdp">
              <p className="form-group-mdp-p-inscription-confirmation">Confirmer mot de passe</p>
              <input className="inputSubscribeHeader" type="password"{...register("confirm_password",)}  id="confirm_password" onChange={(e) => handleInputChange(e)} value={user.confirm_password} />
            </div>
            <div className="form-group-bouton-inscription">
              <button className="bouton_inscription">S'inscrire</button>
            </div>
          </form>
          <div className="deja-compte"onClick={toggleLoginForm}>Tu as déjà un compte ?</div>
        </Modal>
      </div>
    )
}
export default SubscribeHeader
