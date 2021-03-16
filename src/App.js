import Index from './views/Index';
import "./style/app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Index/>
        </Route>
        <Route path="" exact>
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

