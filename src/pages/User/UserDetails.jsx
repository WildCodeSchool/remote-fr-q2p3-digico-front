import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/footer/Footer'
import "./UserDetails.css"

function UserDetails(props) {
    const [user, setUser] = useState([]);
    const usersId = props.match.params.id

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/users/${usersId}`)
        .then((res) => res.data)
        .then((data) => setUser(data))        
    },)

    return (
        <div className="user-container">
            <Header/>
                <div className="container-top"> 
                    <div className="container-img">
                        <img className="user-avatar" src={process.env.PUBLIC_URL + "/assets/" + user.user_img} alt={user.pseudonym} />
                    </div>
                    <div className="top-right">
                        <h2 className="user-pseudo">{user.pseudonym}</h2>
                        <p className="user-description">{user.description}</p>
                    </div>
                </div>
                <div className="container-button">
                    <button className="user-button1">Badges</button>
                    <button className="user-button1">Projets</button>
                    <button className="user-button1">Idées</button>
                    <button className="user-button2">Contributions</button>
                </div>
            <Footer/>
        </div>
    )
}

export default UserDetails
