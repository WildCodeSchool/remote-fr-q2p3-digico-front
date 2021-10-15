import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Footer from '../../components/footer/Footer'
import IdeasCard from '../../components/IdeasCard.jsx';
// import CommentCard from '../../components/comments/CommentCard'
import Header from '../../components/Header';
import "./ListIdea.css"


function ListIdea() {

    const [ideas, setIdeas] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/ideas/ideaowner")
        .then((res) => res.data)
        .then((data) => setIdeas(data))                
    }, [])
   

    return (
        <div>             
             <Header/>
            <div className="ideas">
                {ideas
                .map((idea)=> 
                <div key={idea.id} className="idea_container">
                    <IdeasCard idea={idea} />
                    {/* <CommentCard comment={comment} /> */}
                </div>
                )}
                {/* {comments
                .map((comment)=>
                <div key={comment.id} className="comment_container">
                    <CommentCard comment={comment} />
                </div>
                )} */}
            </div>
            <Footer/>
        </div>
    )
}
export default ListIdea
