import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './CommentCard.css'

function CommentCard({idea}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/ideas/${idea.id}/comments`)
        .then((res) => res.data)
        .then((data) => setComments(data))  
                    
    }, [idea.id])
    return (
        <div className="comment_card_container">
            <textarea className="comment_form" type="text" placeholder="Com"> </textarea>
            <div key={comments.id} className="comment_container">
                <div className="container-comment-user-img">
                    <img className="comment-user-img" src={process.env.PUBLIC_URL + "/assets/" + comments.user_img} alt={comments.pseudonym}/>
                </div>
                <div className="comment-content">
                    <div className="comment-header">    
                        <span className="comment-user">{comments.pseudonym}</span>
                        <span className="comment_date">{comments.comment_date}</span>
                    </div>
                    <div>
                        <span className="comment-desc">{comments.comment_content}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CommentCard
