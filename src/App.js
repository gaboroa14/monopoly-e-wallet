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
import Bank from './views/Bank';
import GameOver from './views/GameOver';
import WinnerWinnerChickenDinner from './views/WinnerWinnerChickenDinner';
import WithdrawMoney from './views/WithdrawMoney';

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
        <Route path="/bank/" exact>
          <Bank/>
          </Route>
        <Route path="/gameover/" exact>
          <GameOver/>
        </Route>
        <Route path="/winner/" exact>
          <WinnerWinnerChickenDinner/>
        </Route>
        <Route path="/withdraw/" exact>
          <WithdrawMoney/>
        </Route>
      </Switch>
      <ToastContainer />
    </Router>
  );
}
export default App;
