import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Register from "./components/Register/Register";
import Secure from "./components/Secure/Secure";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/secure" component={Secure} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
