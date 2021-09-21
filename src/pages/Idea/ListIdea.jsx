import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar.jsx'
import IdeasCard from '../../components/IdeasCard.jsx';
import SubscribeFooter from "../../components/footer/SubscribeFooter.jsx"
import "./ListIdea.css"

function ListIdea() {

    const [ideas, setIdeas] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/ideas/owner")
        .then((res) => res.data)
        .then((data) => setIdeas(data))                
    }, [])

    return (
        <div>
            <Navbar/>
            <div className="ideas">
                {ideas
                .map((idea)=> 
                <div key={idea.id} className="idea_container">
                    <IdeasCard idea={idea} />
                </div>
                )}
            </div>
            <SubscribeFooter/>
        </div>
    )
}

export default ListIdea
