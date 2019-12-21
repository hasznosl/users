import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import UsersTable from './UsersTable';
import Settings from './Settings';
import { positionRelative, sticky, NAV_HEIGHT } from './styles';
import { css } from 'glamor';

const App: React.FC = () => {

  const [nationality, setNationality] = useState(null)

  return (
    <BrowserRouter {...positionRelative}>
      <div {...sticky(0)} {...css({ height: NAV_HEIGHT })}>
        <Link to="/">Home</Link> |
        <Link to="/settings">Settings</Link>
        <hr />
      </div>

      <Switch>
        <Route exact path="/">
          <UsersTable nationality={nationality} />
        </Route>
        <Route exact path="/settings">
          <Settings nationality={nationality} setNationality={setNationality} />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
