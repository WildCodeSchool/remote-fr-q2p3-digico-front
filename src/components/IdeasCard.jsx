import React, {useState} from 'react'
import {FaRegHandPaper, FaRegCommentDots, FaHeart} from 'react-icons/fa';
import CommentCard from '../components/comments/CommentCard'
import './IdeasCard.css'

function IdeasCard({idea, comment}) {
    // const [ideas, setIdeas] = useState([]);
    // useEffect(() => {
    //     axios
    //     .get("http://localhost:8000/api/ideas/ideaowner")
    //     .then((res) => res.data)
    //     .then((data) => setIdeas(data))                
    // }, [])

    const [showComments, setShowComments] = useState(false);
    return (
        <div className="idea_card_container">
            <div className="idea_header">
                <span className="idea_title">{idea.title}</span>
                <span className="owner_name">{idea.pseudonym}</span>
            </div>
            <div className="idea_content">
                <p className="idea desc">{idea.description}</p>
            </div>
            <div className="idea_icons">
                <div className="left_icons">
                    <FaRegHandPaper/>
                    <FaRegCommentDots onClick={() => setShowComments(!showComments)}/>
                </div>
                <div className="right_icons">
                    <FaHeart/>
                </div>
            </div>
            <div className="idea_comments">
            {showComments &&
            <div className="comments">
                <div>
                <input className="comment_form" type="text" placeholder="Com" />
                </div>
                <div className="coms">
                <CommentCard comment={comment} />
                </div>
            </div>}
            </div>
            </div>
    )}

export default IdeasCard
