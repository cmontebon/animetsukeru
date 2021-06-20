import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Homepage from './pages/homepage/homepage.component';
import AnimeDetails from './pages/anime-details/anime-details.component';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/anime/:id' component={AnimeDetails}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
