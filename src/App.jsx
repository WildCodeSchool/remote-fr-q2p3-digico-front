import Welcome from "./pages/Welcome/Welcome.jsx";
// import CreateProject from "./pages/Project/CreateProject.jsx";
import FormCreateProject from "./pages/Project/FormCreateProject";
import CreateIdea from "./pages/Idea/CreateIdea.jsx";
import ListIdea from "./pages/Idea/ListIdea.jsx";
import ListProject from "./pages/Project/ListProject.jsx";
import DetailsProject from "./pages/Project/DetailsProject.jsx";
import Contribution from "./pages/Contribution.jsx";
import UserDetails from "./pages/User/UserDetails.jsx"
import IdeasCard from "./components/IdeasCard.jsx";


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/creer-projet" component={CreateProject}/> */}
          <Route path='/creationProjet' component={FormCreateProject}/>
          <Route exact path="/" component={Welcome}/>
          <Route path="/creer-idee" component={CreateIdea}/>
          <Route path="/liste-idee" component={ListIdea}/>
          <Route path="/liste-projet" component={ListProject}/>
          <Route path="/projets/:id" component={DetailsProject}/>
          <Route path="/contribution" component={Contribution}/>
          <Route path="/utilisateur/:id" component={UserDetails}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
