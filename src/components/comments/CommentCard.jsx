import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './CommentCard.css'
import { FaCommentSlash } from 'react-icons/fa'

function IdeaComments({comment}) {

    return (
        <div className="comment_card_container">
            {comment.comment_content}
        </div>
    )
}

export default IdeaComments
