import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './CommentCard.css'
import { FaCommentSlash } from 'react-icons/fa'

function IdeaComments({comment, idea}) {

    const [comments, setComments] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/comments/comments_card")
        .then((res) => res.data)
        .then((data) => setComments(data))                
    }, [])

// console.log(idea.id);
    return (
        <div className="comment_card_container">
            {comments
                // .filter(comment => comment.idea_id === idea.id)
                .map((comment)=>
                <div key={comment.id} className="comment_container">
                    {comment.comment_content}
                    {comment.comment_date}
                    {/* <CommentCard comment={comment} /> */}
                </div>
                )}
                {/* {comment.comment_content} */}
        </div>
    )
}

export default IdeaComments
