import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import UserProject from "./UserProject.jsx"
import './UserProjects.css'

function UserProjects(props) {
    
    const [userProjects, setUserProjects] = useState([]);
    const userId = props.match.params.id;

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/users/${userId}/projects`)
        .then((res) => res.data)
        .then((data) => setUserProjects(data))
    },[userId])

    return (
        <>{userProjects.map(p => (<UserProject project={p}/>))}</>
    )
}

export default UserProjects
