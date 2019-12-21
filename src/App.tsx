import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import UsersTable from './UsersTable';
import Settings from './Settings';
import { positionRelative, sticky, NAV_HEIGHT } from './styles';
import { css } from 'glamor';
import NationalityContext from './NationalityContext';

const App: React.FC = () => {

  const [nationality, setNationality] = useState(null)

  return (
    <BrowserRouter {...positionRelative}>
      <div {...sticky(0)} {...css({ height: NAV_HEIGHT })}>
        <Link to="/">Home</Link> |
        <Link to="/settings">Settings</Link>
        <hr />
      </div>
      <NationalityContext.Provider value={{ nationality, setNationality }}>
        <Switch>
          <Route exact path="/">
            <UsersTable />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
        </Switch>
      </NationalityContext.Provider>
    </BrowserRouter>
  );
}

export default App;
