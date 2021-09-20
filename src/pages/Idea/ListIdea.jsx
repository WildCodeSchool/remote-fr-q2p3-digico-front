import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {FaRegHandPaper, FaRegCommentDots, FaHeart} from 'react-icons/fa';
import Navbar from '../../components/Navbar.jsx'
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
                    <div className="idea_header">
                        <span className="idea_title">{idea.title}</span>
                        <span className="owner_name">{idea.pseudonym}</span>
                    </div>
                    <div className="idea_content">
                        <p className="idea_desc">{idea.description}</p>
                    </div>
                    <div className="idea_icons">
                        <div className="left_icons">
                        <FaRegHandPaper/> 
                        <FaRegCommentDots/>
                        </div>
                        <div className="right_icons">
                        <FaHeart/>
                        </div>
                    </div>

                </div>
                )}
            </div>
            <SubscribeFooter/>
        </div>
    )
}

export default ListIdea
