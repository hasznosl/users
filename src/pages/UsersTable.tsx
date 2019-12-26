import React, { useState, } from 'react'
import { sticky, positionRelative, blackBorder, SEARCH_MARGIN, SEARCH_HEIGHT, ROW_HEIGHT, NAV_WIDTH } from '../utils/styles'
import { css } from 'glamor'
import UserRow from '../components/UserRow';
import isSelectedUser from '../utils/isSelectedUser'

const loadingAnimation = (css as any).keyframes({
  '0%': { color: 'white' },
  '30%': { color: 'black' },
  '100%': { color: 'white' }
})

/**
 * Users table component renders the passed in users in a table format.
 * 
 */

const UsersTable = ({
  // users to show in the table
  users,
  // maximum number of users to show. Show 'End of catalogue' string if this limit is reached
  maxCatalogueSize,
  // if true then the table is showing an animated loading... string
  isLoading,
  // hook to set the selected user that can be shown in the UserModal
  setSelectedUser,
  // hook value representing the selected user that can be shown in the UserModal
  selectedUser,
  // setter hook to set the user modal visible
  setUserModalVisible
}: {
  users: IUserType[]
  maxCatalogueSize: number
  isLoading: boolean,
  setSelectedUser: (user: IUserType) => void
  selectedUser: IUserType,
  setUserModalVisible: (visible: boolean) => void
}) => {

  const [searchTerm, setSearchTerm] = useState('')

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

  const header = <div {...css({
    display: 'table-row',
  })} >{
      ['picture', 'first name', 'last name', 'username', 'email'].map(
        label => headerCell(label)
      )
    }
  </div>

  const rows = (searchTerm: string) => users.filter(user => `${user.name.first}${user.name.last}`
    .toLowerCase().includes(searchTerm.toLowerCase())
  ).map(
    user => <UserRow
      user={user}
      key={user.email + user.login.username}
      backgroundColor={isSelectedUser(selectedUser, user)
        ? '#F0F0F0' : 'white'}
      onClick={_ => {
        setSelectedUser(user)
        setUserModalVisible(true)
      }} />
  )

  return <div {...positionRelative} >
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
      <div >
        {header}
        {rows(searchTerm)}
      </div>
      {users.length >= maxCatalogueSize && <div>End of users catalog</div>}
    </div>
  </div >
}

export default UsersTable