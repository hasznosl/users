import React, { useEffect, useState } from 'react'
import get from './mockApi';

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


  const renderRows = () => users.map(

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

    <table>
      <tr>
        <th>
          picture
        </th>
        <th>
          first name
        </th>
        <th>
          last name
        </th>
        <th>
          username
        </th>
        <th>
          email
        </th>
      </tr>
      <tbody>
        {isLoading ? <div>loading...</div> : renderRows()}
      </tbody>
    </table>

  </div>
}

export default UsersTable