import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import UserIdea from "./UserIdea.jsx"
import "./UserIdeas.css"

function UserIdeas(props) {

    const [userIdeas, setUserIdeas] = useState([]);
    const userId = props.match.params.id;

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/users/${userId}/ideas`)
        .then((res) => res.data)
        .then((data) => setUserIdeas(data))
    },[userId])

    return (
        <>{userIdeas.map(i => (<UserIdea idea={i}/>))}</>
    )
}

export default UserIdeas
