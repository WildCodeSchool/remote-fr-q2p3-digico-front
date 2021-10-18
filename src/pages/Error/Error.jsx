import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/footer/Footer'
import "./Error.css"

function Error() {
    return (
        <div className="main-container">
            <Header/>
			<h1 className="error">404</h1>
			<h2 className="errorPage">La page que vous recherchez n'existe pas.</h2>
			<p className="pageError">Vous avez peut-être mal tapé l'adresse ou la page a peut-être changée.</p>
            <Footer/>
        </div>
    )
}

export default Error
