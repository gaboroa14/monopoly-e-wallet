import Index from "./views/Index";
import "./style/app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from "./views/Game";
import SendMoney from "./views/SendMoney";
import { ToastContainer } from "react-toastify";
import Bankrupt from "./views/Bankrupt";
import Bank from "./views/Bank";
import GameOver from "./views/GameOver";
import WinnerWinnerChickenDinner from "./views/WinnerWinnerChickenDinner";
import WithdrawMoney from "./views/WithdrawMoney";
import History from "./views/History";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Index />
        </Route>
        <Route path="/monopoly-e-wallet/" exact>
          <Index />
        </Route>
        <Route path="/monopoly-e-wallet/game/" exact>
          <Game />
        </Route>
        <Route path="/monopoly-e-wallet/send/:user/:bank?">
          <SendMoney />
        </Route>
        <Route path="/monopoly-e-wallet/bankrupt/" exact>
          <Bankrupt />
        </Route>
        <Route path="/monopoly-e-wallet/bank/" exact>
          <Bank />
        </Route>
        <Route path="/monopoly-e-wallet/gameover/" exact>
          <GameOver />
        </Route>
        <Route path="/monopoly-e-wallet/winner/" exact>
          <WinnerWinnerChickenDinner />
        </Route>
        <Route path="/monopoly-e-wallet/withdraw/:user" exact>
          <WithdrawMoney />
        </Route>
        <Route path="/monopoly-e-wallet/history/" exact>
          <History />
        </Route>
      </Switch>
      <ToastContainer />
    </Router>
  );
}
export default App;
