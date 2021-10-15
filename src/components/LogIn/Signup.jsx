import {useState} from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';
import SubscribeHeader from '../../components/footer/SubscribeHeader'
import background from'../../Assets/BackGround1.png'
import axios from 'axios';
import "./signup.css"

function Signup() {
    const { handleSubmit, errors, register } = useForm();
    const url = "http://localhost:8000/api/users/register"
    const [user, setUser] = useState({
        pseudonym:"", 
        password:"",
        email:"",
        mobile:""
    })
    const registerUser = () => {
        axios.post(url, {
            pseudonym: user.pseudonym,
            password: user.password,
            email: user.email,
            mobile: user.mobile
        })
        alert("Bienvenue chez nous!")
      };

    function handleInput(e){
        const newUser= {...user}
        newUser[e.target.id] = e.target.value 
        setUser(newUser)
    }

    return (
        <div>
             <SubscribeHeader/>
            <div className="background_signup">
        <img src={background} alt="" /></div> 
           
            <h1 className="pepidea_signup">PEP'IDEA</h1>
            <form className="form_signup"onSubmit={handleSubmit(registerUser)}>

                <input 
                className="pseudo_signup" 
                type="text" 
                {...register("pseudonym")} 
                id="pseudonym" 
                onChange={(e)=>handleInput(e)} 
                placeholder="pseudonym" 
                required
                />

                <input 
                className="email_signup" 
                type="text" 
                {...register("email")} 
                id="email" 
                onChange={(e)=>handleInput(e)} 
                placeholder="email" 
                required
                />

                <input 
                className="mobile" 
                {...register("mobile")} 
                id="mobile" 
                onChange={(e)=>handleInput(e)} 
                placeholder="mobile" 
                required 
                />

                <input 
                className="password_signup" 
                type="password" 
                {...register("password")} 
                id="password" 
                onChange={(e)=>handleInput(e)} 
                placeholder="password" 
                required
                />

                <input className="button_submit" type="submit"/>
             </form>
             <p className="sentence_no_account">
                 Déjà un compte ? Clique&nbsp;<Link to="/login" > ici </Link>
             </p>
             <Link to='/' className="button_welcome_signup">ACCUEIL</Link>
        </div>
    )
}

export default Signup
