import Index from './views/Index';
import "./style/app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Game from './views/Game';
import SendMoney from './views/SendMoney';

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
        <Route path="/send/" exact>
          <SendMoney/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
