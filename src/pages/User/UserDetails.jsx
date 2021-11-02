import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/footer/Footer'
import "./UserDetails.css"
// import { Link } from 'react-router-dom'
import UserProjects from './Tab/UserProjects.jsx'
import UserBadges from './Tab/UserBadges.jsx'
import UserContribs from './Tab/UserContribs.jsx'
import UserIdeas from './Tab/UserIdeas.jsx'



import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';

function UserDetails(props) {
    const [user, setUser] = useState([]);
    const usersId = props.match.params.id
    let { path, url } = useRouteMatch();

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
                    <Link to={`${url}/mes-badges`} className="user-button1">Badges</Link>
                    <Link to={`${url}/mes-projets`} className="user-button1">Projets</Link>
                    <Link to={`${url}/mes-idees`} className="user-button1">Idées</Link>
                    <Link to={`${url}/mes-contributions`} className="user-button2">Contributions</Link>
                </div>   
                <div className="container-element">
                <Switch>
                    <Route exact path={`${path}/mes-badges`} component={UserBadges}></Route>
                    <Route path={`${path}/mes-projets`} component={UserProjects}></Route>
                    <Route path={`${path}/mes-idees`} component={UserIdeas}></Route>
                    <Route path={`${path}/mes-contributions`} component={UserContribs}></Route>
                </Switch>
                </div>
            <Footer/>
        </div>
    )
}

export default UserDetails
