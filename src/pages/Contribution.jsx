import React from 'react'
import ConnectFooter from '../components/footer/ConnectFooter'
// import {Link} from 'react-router-dom'
import "./Contribution.css"



function Contribution() {
    return (
        <div>
            <ConnectFooter/>
            <div className="form_contrib">
            <label className="dispo_contrib"> Mes disponibilités</label>
            <label className="dispo_contrib_start"> A partir du :</label>
            <input className="date_contrib" type="date" />
            <label className="dispo_contrib_end">Jusqu'au :</label>
            <input className="date_contrib" type="date" />
            <label className="title_desc_contrib">Dis nous en plus</label>
            <textarea className="description_contribution" type="textarea"  placeholder="juste quelques lignes pour te présenter nous expliquer ce que tu pourrais apporter au projet "/>
            <button className="button_submit_contrib">JE ME PROPOSE</button>

            </div>   
        </div>
    )
}

export default Contribution
