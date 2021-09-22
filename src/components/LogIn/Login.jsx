import React from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';

function Login() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
      };

    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>
                <input name="pseudonyme" ref={register} placeholder="username"/>
                <input name="password" ref={register} placeholder="password"/>
                <input type="submit"/>
             </form>
             <span>
                 No account yet ? Click <Link>here</Link>. 
             </span>
        </div>
    )
}

export default Login
