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
                <div key={comments.id} className="comment_container">
                    {comments.comment_content}
                    {comments.comment_date}
                </div>
        </div>
    )
}

export default CommentCard
