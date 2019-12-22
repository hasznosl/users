import React, { useState, } from 'react'
// import get from './mockApi';
import { sticky, NAV_HEIGHT, ROW_HEIGHT, positionRelative } from '../utils/styles'
import { css } from 'glamor'
import UserModal from '../components/UserModal'
import isSelectedUser from '../utils/isSelectedUser'


const UsersTable = ({ users, maxCatalogueSize, isLoading }: {
  users: any[]
  maxCatalogueSize: number
  isLoading: boolean
}) => {

  const [searchTerm, setSearchTerm] = useState('')
  const [userModalVisible, setUserModalVisible] = useState(false)
  const [userModalPositionX, setUserModalPositionX] = useState(0)
  const [userModalPositionY, setUserModalPositionY] = useState(0)
  const [userModalUser, setUserModalUser] = useState(null)


  const header = <thead>
    <tr>
      <th {...sticky(NAV_HEIGHT + ROW_HEIGHT)}>picture</th>
      <th {...sticky(NAV_HEIGHT + ROW_HEIGHT)}>first name</th>
      <th {...sticky(NAV_HEIGHT + ROW_HEIGHT)}>last name</th>
      <th {...sticky(NAV_HEIGHT + ROW_HEIGHT)}>username</th>
      <th {...sticky(NAV_HEIGHT + ROW_HEIGHT)}>email</th>
    </tr>
  </thead>

  const rows = (searchTerm: string) => users.filter((user: any) => `${user.name.first}${user.name.last}`
    .toLowerCase().includes(searchTerm.toLowerCase())
  ).map(
    (user: any) => <tr
      key={user.email + user.login.username}
      {...css({
        cursor: 'pointer', backgroundColor: isSelectedUser(userModalUser, user)
          ? '#F0F0F0' : 'white'
      })}
      onClick={(e) => {
        setUserModalPositionY(e.pageY)
        setUserModalPositionX(e.pageX)
        setUserModalUser(user)
        setUserModalVisible(true)
      }}>
      <td {...css({
        border: '1px solid black'
      })}>
        <img src={user.picture.thumbnail} />
      </td>
      <td {...css({
        border: '1px solid black'
      })}>
        {user.name.first}
      </td>
      <td {...css({
        border: '1px solid black'
      })}>
        {user.name.last}
      </td>
      <td {...css({
        border: '1px solid black'
      })}>
        {user.login.username}
      </td>
      <td {...css({
        border: '1px solid black'
      })}>
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
    <table {...css({
      borderCollapse: 'collapse'
    })}>
      {header}
      <tbody>
        {rows(searchTerm)}
      </tbody>
    </table>
    {isLoading && <div>loading...</div>}
    {users.length >= maxCatalogueSize && <div>End of users catalog</div>}
  </div >
}

export default UsersTable