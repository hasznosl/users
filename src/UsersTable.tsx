import React, { useEffect, useState } from 'react'
import get from './mockApi';
import { css } from 'glamor'


const sticky = css({ position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'white' })

const UsersTable = () => {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getUsers = async () => {
      const response = JSON.parse(await get(1, ''))
      setIsLoading(false)
      setUsers(response.results)
    }

    getUsers()

  }, [])


  const header = <tr>
    <th {...sticky}>
      picture
  </th>
    <th {...sticky}>
      first name
  </th>
    <th {...sticky}>
      last name
  </th>
    <th {...sticky}>
      username
  </th>
    <th {...sticky}>
      email
  </th>
  </tr>

  const rows = () => users.map(

    (user: any) => <tr key={user.id}>
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

  return <div>

    <table {...css({ position: 'relative' })}>
      {header}
      <tbody>
        {isLoading ? <div>loading...</div> : rows()}
      </tbody>
    </table>

  </div>
}

export default UsersTable