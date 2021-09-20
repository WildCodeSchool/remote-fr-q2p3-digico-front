import React from 'react'
import {FaRegHandPaper, FaRegCommentDots, FaHeart} from 'react-icons/fa';
import './IdeasCard.css'

function IdeasCard({idea}) {
    return (
        <div>
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
    )
}

export default IdeasCard
