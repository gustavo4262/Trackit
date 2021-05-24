import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import SignIn from "./Login/SignIn";
import SignUp from "./Login/SignUp";
import Today from "./Today/Today";
import Habits from "./Habits/Habits";
import History from "./History/History";

export default function App() {
  const [user, setUser] = useState();

  return (
    <BrowserRouter>
      <Switch>
        <UserContext.Provider value={{ user, setUser }}>
          <Route path="/" exact>
            <SignIn></SignIn>
          </Route>
          <Route path="/cadastro" exact>
            <SignUp></SignUp>
          </Route>
          <Route path="/hoje" exact>
            <Today></Today>
          </Route>
          <Route path="/habitos" exact>
            <Habits></Habits>
          </Route>
          <Route path="/historico" exact>
            <History></History>
          </Route>
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}
