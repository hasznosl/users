import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { positionRelative, } from './utils/styles';
import { css } from 'glamor';
import NationalityContext from './contexts/NationalityContext';
import loadable from '@loadable/component'
import useUsers, { maxCatalogueSize } from './hooks/useUsers';
import Navigation from './components/Navigation'


const UsersTable = loadable(() => import('./pages/UsersTable'))
const Settings = loadable(() => import('./pages/Settings'))


const App: React.FC = () => {
  const [nationalities, setNationalities] = useState([])
  const { users, isLoading } = useUsers({ nationalities })

  return (
    <BrowserRouter >
      <div {...css({ display: 'flex', flexDirection: 'row', justifyContent: 'start' })}>
        <Navigation />
        <NationalityContext.Provider value={{ nationalities, setNationalities }}>
          <Switch>
            <Route exact path="/">
              <UsersTable
                users={users}
                isLoading={isLoading}
                maxCatalogueSize={maxCatalogueSize} />
            </Route>
            <Route exact path="/settings">
              <Settings />
            </Route>
          </Switch>
        </NationalityContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
