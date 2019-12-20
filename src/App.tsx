import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import UsersTable from './UsersTable';
import Settings from './Settings';





const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>
      <hr />

      <Switch>
        <Route exact path="/">
          <UsersTable />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
