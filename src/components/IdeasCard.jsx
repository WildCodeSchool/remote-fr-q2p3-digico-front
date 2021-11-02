import React, {useState,useEffect} from 'react'
import axios from 'axios';
import CommentCard from '../components/comments/CommentCard'
import clapsIcon from '../assets/icons/clapsIcon.png';
import emptyHeartIcon from '../assets/icons/emptyHeartIcon.png';
import './IdeasCard.css'

function IdeasCard({idea, comment}) {
  const [showComments, setShowComments] = useState(false);
  const [ideas, setIdeas] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/ideas/ideaowner")
        .then((res) => res.data)
        .then((data) => setIdeas(data))                
    }, [])

    return (
        <div className="idea_card_container">
            <div className="idea-container">
                <div className="idea-user-img-container">
                    <img className="idea-user-img" src={process.env.PUBLIC_URL + "/assets/" + idea.user_img} alt={idea.pseudonym}/>
                </div>
                <div className="idea-content-container">
                    <div className="idea_header">
                        <div className="idea-left-header">
                            <span className="idea_title">{idea.pseudonym}</span>
                            <span className="owner_name">{idea.title}</span>
                        </div>
                        <div className="idea-right-header">
                            <img src={clapsIcon} alt="clapsIcon" />
                            <img src={emptyHeartIcon} alt="emptyHeartIcon" class="heartIcons"/>
                        </div>
                    </div>
                    <div className="idea_content">
                        <p className="idea-desc">{idea.description}</p>
                        <span className="idea-date">Idée créé le : {idea.idea_date}</span>
                    </div>
                </div>
            </div>
            <div className="comment-toggle">
                <div className="show-comments" onClick={() => setShowComments(!showComments)}>Commentaires...</div>
                <div className="idea_comments">
                    {showComments &&
                        <div className="coms">
                        <CommentCard comment={comment} idea={idea} />
                        </div>}
                </div>
            </div>
        </div>
    )}

export default IdeasCard
