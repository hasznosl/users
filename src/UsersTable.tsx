import React, { useEffect, useState } from 'react'
// import get from './mockApi';
import axios from 'axios'
import debounce from 'lodash/debounce'
import { sticky, NAV_HEIGHT, ROW_HEIGHT, positionRelative } from './styles';


const UsersTable = ({ nationality }: { nationality: string | null }) => {

  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const getUsers = async (page: number) => {
    const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=50&seed=jggjghjkgj${nationality ? `&nat=${nationality}` : ''}`) as any
    setIsLoading(false)
    const newUsers = [...users, ...response.data.results] as never[]
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

    (user: any) => <tr key={user.email + user.login.username}>
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

  </div>
}

export default UsersTable