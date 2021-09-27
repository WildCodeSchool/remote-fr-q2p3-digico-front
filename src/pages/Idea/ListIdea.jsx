import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar.jsx'
import IdeasCard from '../../components/IdeasCard.jsx';
import CommentCard from '../../components/comments/CommentCard'
import SubscribeFooter from "../../components/footer/SubscribeFooter.jsx"
import "./ListIdea.css"

function ListIdea() {

    const [ideas, setIdeas] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/ideas/ideaowner")
        .then((res) => res.data)
        .then((data) => setIdeas(data))                
    }, [])
    const [comments, setComments] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/comments/comments_card")
        .then((res) => res.data)
        .then((data) => setComments(data))                
    }, [])

    return (
        <div>
             <SubscribeFooter />
            
            <div className="ideas">
                {ideas
                .map((idea)=> 
                <div key={idea.id} className="idea_container">
                    <IdeasCard idea={idea} />
                </div>
                )}
                {comments
                .map((comment)=>
                <div key={comment.id} className="comment_container">
                    <CommentCard comment={comment} />
                </div>
                )}
            </div>
            <Navbar/>
        </div>
    )
}

export default ListIdea
