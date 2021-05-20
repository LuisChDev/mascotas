import { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router";

import { Header } from "./Header";
import { Login } from "./Login";
import { Home } from "./Home";

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const PrivateRoute = ({auth, children, ...rest}: {
  auth: boolean,
  children: JSX.Element,
  [x:string]: any  // "...rest"
}) => {
  return (
    <Route {...rest} render={() => {
      return (auth ? children : <Redirect to='/login'/>);
    }}/>
  );
};

function App() {
  const [loggedin, setLoggedin] = useState(false);

  return (
    <div className="App">

        <Router>
            <Header />

            <Switch>
                <PrivateRoute auth={loggedin} exact path="/">
                    <Home />
                </PrivateRoute>
                <Route path="/login">
                    <Login loggedin={loggedin} login={setLoggedin} />
                </Route>
            </Switch>
        </Router>

    </div>
  );
}

export default App;
