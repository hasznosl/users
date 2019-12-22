import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import { positionRelative, sticky, NAV_HEIGHT } from './utils/styles';
import { css } from 'glamor';
import NationalityContext from './contexts/NationalityContext';
import loadable from '@loadable/component'

import useUsers from './hooks/useUsers';
const UsersTable = loadable(() => import('./pages/UsersTable'))
const Settings = loadable(() => import('./pages/Settings'))


const App: React.FC = () => {
  const [nationalities, setNationalities] = useState([])
  const { users, setUsers, isLoading, maxCatalogueSize } = useUsers({ nationalities })

  return (
    <BrowserRouter {...positionRelative}>
      <div {...sticky(0)} {...css({ height: NAV_HEIGHT })}>
        <Link to="/">Home</Link> | <Link to="/settings">Settings</Link>
        <hr />
      </div>
      <NationalityContext.Provider value={{ nationalities, setNationalities }}>
        <Switch>
          <Route exact path="/">
            <UsersTable
              users={users}
              setUsers={setUsers}
              isLoading={isLoading}
              maxCatalogueSize={maxCatalogueSize} />
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
