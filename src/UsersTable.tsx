import React, { useEffect, useState } from 'react'
import get from './mockApi';
import { css } from 'glamor'
import debounce from 'lodash/debounce'


const sticky = css({ position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'white' })

const UsersTable = () => {

  const [users, setUsers] = useState([])

  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const getUsers = async (page: number) => {
    const response = JSON.parse(await get(page, ''))
    setIsLoading(false)

    const newUsers = [...users, ...response.results] as never[]
    setUsers(newUsers)
  }


  window.onscroll = debounce(() => {
    // todo this 0.7 can be improved
    if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight * 0.7) {
      getUsers(page + 1)
      setPage(page + 1)
    }
  }, 50)

  useEffect(() => {
    getUsers(page)
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

    (user: any) => <tr key={user.name.first}>
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
        {rows()}
      </tbody>
      {isLoading && <div>loading...</div>}
    </table>

  </div>
}

export default UsersTable