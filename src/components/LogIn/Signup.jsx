import React from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';

function Signup() {
    const { handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
      };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="pseudonyme"  placeholder="username"/>
                <input name="email"  placeholder="email" type="email"/>
                <input name="phone"  placeholder="phone" />
                <input name="password"  placeholder="password"/>
                <input type="submit"/>
             </form>
             <span>
                 Got an account ? Click <Link to="/">here</Link> to get back on Homepage. 
             </span>
        </div>
    )
}

export default Signup
