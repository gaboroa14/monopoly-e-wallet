import Index from './views/Index';
import "./style/app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Game from './views/Game';
import SendMoney from './views/SendMoney';
import { ToastContainer } from 'react-toastify';
import Bankrupt from './views/Bankrupt';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/monopoly-e-wallet/" exact>
          <Index/>
        </Route>
        <Route path="/game/" exact>
          <Game/>
        </Route>
        <Route path="/send/" exact>
          <SendMoney/>
        </Route>
        <Route path="/bankrupt/" exact>
          <Bankrupt/>
        </Route>
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;
