import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { css } from 'glamor';
import NationalityContext from './contexts/NationalityContext';
import loadable from '@loadable/component'
import useUsers, { maxCatalogueSize } from './hooks/useUsers';
import Navigation from './components/Navigation'
import UserModal from './components/UserModal';
import SelectedUserContext from './contexts/SelectedUserContext';


const UsersTable = loadable(() => import('./pages/UsersTable'))
const Settings = loadable(() => import('./pages/Settings'))


const App: React.FC = () => {
  const [nationalities, setNationalities] = useState([])
  const [userModalVisible, setUserModalVisible] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const { users, isLoading, scrollTop } = useUsers({ nationalities })

  return (
    <BrowserRouter >
      <div {...css({ display: 'flex', flexDirection: 'row', justifyContent: 'start' })}>

        <Navigation />
        <NationalityContext.Provider value={{ nationalities, setNationalities }}>
          <SelectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>
            <Switch>
              <Route exact path="/">
                <UserModal
                  positionX={900}
                  positionY={scrollTop + 160}
                  setVisible={setUserModalVisible}
                  visible={userModalVisible}
                  user={selectedUser}
                />
                <UsersTable
                  users={users}
                  isLoading={isLoading}
                  maxCatalogueSize={maxCatalogueSize}
                  selectedUser={selectedUser}
                  setSelectedUser={setSelectedUser}
                  setUserModalVisible={setUserModalVisible} />
              </Route>
              <Route exact path="/settings">
                <Settings />
              </Route>
            </Switch>
          </SelectedUserContext.Provider>
        </NationalityContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
