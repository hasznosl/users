import React, { useState, useContext, } from 'react'
import { sticky, positionRelative, SEARCH_MARGIN, SEARCH_HEIGHT, NAV_WIDTH } from '../utils/styles'
import { css } from 'glamor'
import UserRow from '../components/UserRow';
import isSelectedUser from '../utils/isSelectedUser'
import SelectedUserContext from '../contexts/SelectedUserContext';

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
}: {
  users: IUserType[]
  maxCatalogueSize: number
  isLoading: boolean,
  setUserModalVisible: (visible: boolean) => void
}) => {

  const [searchTerm, setSearchTerm] = useState('')
  const { selectedUser, setSelectedUser, setUserModalVisible } = useContext(SelectedUserContext)

  const rows = (searchTerm: string) => [
    // first element represents the header
    null
    ,
    // actual users
    ...users.filter(user => `${user.name.first}${user.name.last}`
      .toLowerCase().includes(searchTerm.toLowerCase())
    )].map(
      (user, index) => {
        const isHeader = index === 0

        return <UserRow
          rowIndex={index}
          user={user}
          key={isHeader ? 'header' : user ? user.email : '' + (user ? (user as IUserType).login.username : '')}
          backgroundColor={isSelectedUser(selectedUser, user)
            ? '#F0F0F0' : 'white'}
          onClick={isHeader ?
            undefined :
            (_) => {
              setSelectedUser(user!)
              setUserModalVisible(true)
            }} />
      }
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
      alignItems: 'start',
      minWidth: 900,
      width: '40vw'
    })}>
      <div {...css({
        display: 'flex',
        flexDirection: 'column',
        minWidth: 900,
        width: '40vw'
      })}>
        {rows(searchTerm)}
      </div>
      {users.length >= maxCatalogueSize && <div>End of users catalog</div>}
    </div>
  </div >
}

export default UsersTable