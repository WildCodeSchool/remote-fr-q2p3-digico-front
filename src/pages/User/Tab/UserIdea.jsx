import React from 'react'
import "./UserIdea.css"

function UserIdea(props) {
    
    return (
        <div className="idea_card_container">
            <div className="idea_header">
                <span className="idea_title">{props.idea.title}</span>
                <span className="owner_name">{props.idea.pseudonym}</span>
            </div>
            <div className="idea_content">
                <p className="idea desc">{props.idea.description}</p>
            </div>
            </div>
    )
}

export default UserIdea
