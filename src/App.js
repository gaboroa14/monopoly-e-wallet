import Index from './views/Index';
import "./style/app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Game from './views/Game';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Index/>
        </Route>
        <Route path="/game/" exact>
          <Game/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
