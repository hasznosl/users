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
}) => <div
  key={user.email + user.login.username}
  {...css({
    cursor: 'pointer',
    backgroundColor,
    display: 'table-row'
  })}
  onClick={onClick}>
    <div {...blackBorder(true)} {...css({ display: 'table-cell' })}>
      <img src={user.picture.thumbnail} />
    </div>
    <div {...blackBorder(true)} {...css({ display: 'table-cell' })}>
      {user.name.first}
    </div>
    <div {...blackBorder(true)} {...css({ display: 'table-cell' })}>
      {user.name.last}
    </div>
    <div {...blackBorder(true)} {...css({ display: 'table-cell' })}>
      {user.login.username}
    </div>
    <div {...blackBorder(true)} {...css({ display: 'table-cell' })}>
      {user.email}
    </div>
  </div>

export default UserRow
