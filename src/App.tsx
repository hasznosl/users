import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import { positionRelative, sticky, NAV_HEIGHT } from './utils/styles';
import { css } from 'glamor';
import NationalityContext from './contexts/NationalityContext';
import loadable from '@loadable/component'
import nationalitiesToQueryString from './utils/nationalitiesToQueryString'
import axios from 'axios'
import debounce from 'lodash/debounce'
const UsersTable = loadable(() => import('./pages/UsersTable'))
const Settings = loadable(() => import('./pages/Settings'))

const MAX_CATALOG_SIZE = 1000
const NEXT_BATCH_SIZE = 50

const App: React.FC = () => {
  const [nationalities, setNationalities] = useState([])
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const fetchAndStoreUsers = async ({ page, shouldAppend }: { page: number, shouldAppend: boolean }) => {
    if (users.length >= MAX_CATALOG_SIZE) {
      return null
    }
    const response = await axios.get(`https://randomuser.me/api/?page=${page}
    &results=${NEXT_BATCH_SIZE}
    &seed=jggjghjkgj${
      nationalitiesToQueryString(nationalities)}`) as any
    setIsLoading(false)
    const newUsers = shouldAppend ? [...users, ...response.data.results] : response.data.results
    setUsers(newUsers)
  }

  window.onscroll = debounce(() => {
    // todo this 0.9 can be improved
    if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight * 0.9) {
      fetchAndStoreUsers({ page: page + 1, shouldAppend: true })
      setPage(page + 1)
    }
  }, 50)

  useEffect(() => {
    fetchAndStoreUsers({ page: 1, shouldAppend: false })
    setPage(1)
  }, [nationalities])


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
              maxCatalogueSize={MAX_CATALOG_SIZE} />
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
