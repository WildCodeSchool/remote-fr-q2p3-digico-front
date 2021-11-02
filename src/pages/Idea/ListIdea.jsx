import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Footer from '../../components/footer_header/Footer'
import IdeasCard from '../../components/IdeasCard.jsx';
import Header from '../../components/footer_header/Header';
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
                </div>
                )}
            </div>
            <Footer/>
        </div>
    )
}
export default ListIdea
