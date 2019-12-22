import React from 'react'
import { css } from "glamor";
import { blackBorder } from '../utils/styles';

const UserRow = ({
  user,
  onClick,
  backgroundColor
}: {
  user: any
  onClick: (e: any) => void
  backgroundColor: string
}) => <tr
  key={user.email + user.login.username}
  {...css({
    cursor: 'pointer', backgroundColor
  })}
  onClick={onClick}>
    <td {...blackBorder}>
      <img src={user.picture.thumbnail} />
    </td>
    <td {...blackBorder}>
      {user.name.first}
    </td>
    <td {...blackBorder}>
      {user.name.last}
    </td>
    <td {...blackBorder}>
      {user.login.username}
    </td>
    <td {...blackBorder}>
      {user.email}
    </td>
  </tr>

export default UserRow
