import React from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';
import "./signup.css"

function Signup() {
    const { handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
      };

    return (
        <div>
            <h1 className="pepidea_signup">PEP'IDEA</h1>
            <form className="form_signup"onSubmit={handleSubmit(onSubmit)}>
                <input className="pseudo_signup"name="pseudonyme"  placeholder="username"/>
                <input className="email_signup"name="email"  placeholder="email" type="email"/>
                <input className="phone_signup"name="phone"  placeholder="phone" />
                <input className="password_signup"name="password"  placeholder="password"/>
                <input className="button_submit" type="submit"/>
             </form>
             <p className="sentence_no_account">
                 Déjà un compte ? Clique&nbsp;<Link to="/login" > ici </Link>
             </p>
             <Link to='/'  className="button_welcome_signup">ACCUEIL</Link>
        </div>
    )
}

export default Signup
