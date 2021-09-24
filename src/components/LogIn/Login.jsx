import React from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';
import './login.css'
function Login() {
    const {  handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
      };

    return (
        <div className="login">
            <h1 className="pepidea_login">PEP'IDEA</h1>
             <form className="form_login" onSubmit={handleSubmit(onSubmit)}>
                <input className="pseudo_login"  placeholder="username"/>
                <input className="password_login"  placeholder="password"/>
                <input className="button_login" type="submit"/>
             </form>
             <p className="no_account">
                 Pas encore de compte ? Clique&nbsp;<Link to="/signup" >ici</Link>. 
                 </p> 

                 <Link to='/'  className="button_welcome_login">ACCUEIL</Link>
             
        </div>
    )
}

export default Login
