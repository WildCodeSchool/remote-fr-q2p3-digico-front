import Welcome from "./pages/Welcome/Welcome.jsx";
import FormCreateProject from "./pages/Project/FormCreateProject";
import CreateIdea from "./pages/Idea/CreateIdea.jsx";
import ListIdea from "./pages/Idea/ListIdea.jsx";
import ListProject from "./pages/Project/ListProject.jsx";
import DetailsProject from "./pages/Project/DetailsProject.jsx";
import Error from "./pages/Error/Error.jsx"
import Contribution from "./pages/Contribution.jsx";
import UserDetails from "./pages/User/UserDetails.jsx"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/creationProjet' component={FormCreateProject}/>
          <Route exact path="/" component={Welcome}/>
          <Route path="/creer-idee" component={CreateIdea}/>
          <Route path="/liste-idee" component={ListIdea}/>
          <Route path="/liste-projet" component={ListProject}/>
          <Route path="/projects/:id" component={DetailsProject}/>
          <Route path="/contribution" component={Contribution}/>
          <Route path="/utilisateur/:id" component={UserDetails}/>
          <Route component={Error}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
