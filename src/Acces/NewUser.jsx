import {useState} from 'react'
import axios from 'axios';

function NewUser() {
const url = "http://localhot:8000/api/users"
const [user, setUser] = useState({
    email: "",
    password: "",
})

const createUser = e => {
    e.preventDefault();
    axios.post(url, {
        email: user.email,
        password: user.password,
    })
}

    function handleInputChange(e) {
        const newUser = {...user}
        newUser [e.target.value] = e.target.value 
        setUser(newUser)
    }
    return (
        <div>
            
        </div>
    )
}

export default NewUser
