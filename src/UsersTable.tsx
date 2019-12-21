import React, { useEffect, useState, useContext } from 'react'
// import get from './mockApi';
import axios from 'axios'
import debounce from 'lodash/debounce'
import { sticky, NAV_HEIGHT, ROW_HEIGHT, positionRelative } from './styles'
import NationalityContext from './NationalityContext'
import { css } from 'glamor'
import UserModal from './UserModal'


const MAX_CATALOG_SIZE = 1000
const NEXT_BATCH_SIZE = 50

const UsersTable = () => {

  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [userModalVisible, setUserModalVisible] = useState(false)
  const [userModalPositionX, setUserModalPositionX] = useState(0)
  const [userModalPositionY, setUserModalPositionY] = useState(0)
  const [userModalUser, setUserModalUser] = useState(null)

  const { nationality } = useContext(NationalityContext)

  const getUsers = async (page: number) => {
    if (users.length >= MAX_CATALOG_SIZE) {
      return null
    }
    const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=${NEXT_BATCH_SIZE}&seed=jggjghjkgj${nationality ? `&nat=${nationality}` : ''}`) as any
    setIsLoading(false)
    const newUsers = [...users, ...response.data.results] as never[]
    setUsers(newUsers)
  }

  window.onscroll = debounce(() => {
    // todo this 0.9 can be improved
    if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight * 0.9) {
      getUsers(page + 1)
      setPage(page + 1)
    }
  }, 50)

  useEffect(() => {
    getUsers(page)
  }, [])


  const header = <thead>
    <tr>
      <th {...sticky(NAV_HEIGHT + ROW_HEIGHT)}>
        picture
  </th>
      <th {...sticky(NAV_HEIGHT + ROW_HEIGHT)}>
        first name
  </th>
      <th {...sticky(NAV_HEIGHT + ROW_HEIGHT)}>
        last name
  </th>
      <th {...sticky(NAV_HEIGHT + ROW_HEIGHT)}>
        username
  </th>
      <th {...sticky(NAV_HEIGHT + ROW_HEIGHT)}>
        email
  </th>
    </tr>
  </thead>

  const rows = (searchTerm: string) => users.filter((user: any) =>
    `${user.name.first}${user.name.last}`.toLowerCase().includes(searchTerm.toLowerCase())
  ).map(
    (user: any) => <tr key={user.email + user.login.username} {...css({ cursor: 'pointer' })} onClick={(e) => {
      setUserModalPositionY(e.pageY)
      setUserModalPositionX(e.pageX)
      setUserModalUser(user)
      setUserModalVisible(true)
    }}>
      <td>
        <img src={user.picture.thumbnail} />
      </td>
      <td>
        {user.name.first}
      </td>
      <td>
        {user.name.last}
      </td>
      <td>
        {user.login.username}
      </td>
      <td>
        {user.email}
      </td>
    </tr>
  )


  return <div {...positionRelative}>
    <UserModal
      positionX={userModalPositionX}
      positionY={userModalPositionY}
      setVisible={setUserModalVisible}
      visible={userModalVisible}
      user={userModalUser}
    />
    <div {...sticky(NAV_HEIGHT)}>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
    <table>
      {header}
      <tbody>
        {rows(searchTerm)}
      </tbody>
    </table>
    {isLoading && <div>loading...</div>}
    {users.length >= MAX_CATALOG_SIZE && <div>End of users catalog</div>}
  </div >
}

export default UsersTable