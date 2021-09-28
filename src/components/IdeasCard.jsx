import React, {useState} from 'react'
import {FaRegHandPaper, FaRegCommentDots, FaHeart} from 'react-icons/fa';
import './IdeasCard.css'

function IdeasCard({idea}) {

    const [showComments, setShowComment] = useState(false);
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
                    <FaRegCommentDots onClick={() => setShowComment(!showComments)}/>
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
                    <span>Com1 : Blablabla</span>
                </div>
            </div>}
        </div>

        </div>
    )}

export default IdeasCard
