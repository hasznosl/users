import React, { useState, } from 'react'
import { sticky, positionRelative, blackBorder, SEARCH_MARGIN, SEARCH_HEIGHT, ROW_HEIGHT, NAV_WIDTH } from '../utils/styles'
import { css } from 'glamor'
import UserModal from '../components/UserModal'
import UserRow from '../components/UserRow';
import isSelectedUser from '../utils/isSelectedUser'

const loadingAnimation = (css as any).keyframes({
  '0%': { color: 'white' },
  '30%': { color: 'black' },
  '100%': { color: 'white' }
})


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

  const headerCell = (label: string) => <div
    key={label} {...sticky(SEARCH_HEIGHT)}
    {...blackBorder(true)}
    {...css({
      backgroundColor: 'white',
      display: 'table-cell',
      verticalAlign: 'middle',
      height: ROW_HEIGHT,
      borderTop: '1px solid black',
      minWidth: 50,
    })}>
    {label}
  </div>

  const header = <div {...css({ display: 'table-row' })} >{
    ['picture', 'first name', 'last name', 'username', 'email'].map(
      label => headerCell(label)
    )
  }
  </div>

  const rows = (searchTerm: string) => users.filter((user: any) => `${user.name.first}${user.name.last}`
    .toLowerCase().includes(searchTerm.toLowerCase())
  ).map(
    (user: any) => <UserRow
      user={user}
      key={user.email + user.login.username}
      backgroundColor={isSelectedUser(userModalUser, user)
        ? '#F0F0F0' : 'white'}
      onClick={(e: any) => {
        setUserModalPositionY(e.pageY)
        setUserModalPositionX(e.pageX)
        setUserModalUser(user)
        setUserModalVisible(true)
      }} />
  )

  return <div {...positionRelative} >
    <UserModal
      positionX={userModalPositionX}
      positionY={userModalPositionY}
      setVisible={setUserModalVisible}
      visible={userModalVisible}
      user={userModalUser}
    />
    <div {...sticky(0)} {...css({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: SEARCH_HEIGHT,
      backgroundColor: 'white',
    })}>
      <div {...css({
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        width: `calc(100vw - ${NAV_WIDTH}px)`,
        borderBottom: '1px solid black'
      })}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search"
          {...css({ margin: SEARCH_MARGIN })} />
        <div {...css({
          visibility: isLoading ? 'visible' : 'hidden',
          padding: 5,
          animation: `${loadingAnimation} 1s linear infinite`
        })}>loading...</div>
      </div>
    </div>
    <div {...css({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'start'
    })}>
      <div>
        {header}
        {rows(searchTerm)}
      </div>
      {users.length >= maxCatalogueSize && <div>End of users catalog</div>}
    </div>
  </div >
}

export default UsersTable