import Welcome from "./pages/Welcome/Welcome.jsx";
import CreateProject from "./pages/Project/CreateProject.jsx";
import CreateIdea from "./pages/Idea/CreateIdea.jsx";
import ListIdea from "./pages/Idea/ListIdea.jsx";
import ListProject from "./pages/Project/ListProject.jsx";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/creer-projet" component={CreateProject}/>
          <Route exact path="/" component={Welcome}/>
          <Route path="/creer-idee" component={CreateIdea}/>
          <Route path="/liste-idee" component={ListIdea}/>
          <Route path="/liste-projet" component={ListProject}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
