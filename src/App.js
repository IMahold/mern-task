import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
// import Logincopy from "./components/Login/Logincopy";
import Main from "./components/Main/Main";
import Secure from "./components/Secure/Secure";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/secure" component={Secure} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/login" component={Logincopy} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
