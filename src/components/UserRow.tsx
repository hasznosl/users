import React from 'react'
import { css } from "glamor";
import { blackBorder, sticky, SEARCH_HEIGHT, ROW_HEIGHT } from '../utils/styles';

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

const UserRow = ({
  rowIndex,
  user,
  onClick,
  backgroundColor
}: {
  rowIndex: number
  user: IUserType | null
  onClick?: (e: any) => void
  backgroundColor: string
}) => rowIndex === 0 ?
    // header row
    <div {...css({
      display: 'table-row',
    })} >{
        ['picture', 'first name', 'last name', 'username', 'email'].map(
          label => headerCell(label)
        )
      }
    </div>
    :
    // user row
    <div
      {...css({
        cursor: 'pointer',
        backgroundColor,
        display: 'table-row'
      })}
      onClick={onClick}>
      <div {...blackBorder(true)} {...css({ display: 'table-cell' })}>
        <img src={user ? user.picture.thumbnail : ''} />
      </div>
      <div {...blackBorder(true)} {...css({ display: 'table-cell' })}>
        {user && user.name.first}
      </div>
      <div {...blackBorder(true)} {...css({ display: 'table-cell' })}>
        {user && user.name.last}
      </div>
      <div {...blackBorder(true)} {...css({ display: 'table-cell' })}>
        {user && user.login.username}
      </div>
      <div {...blackBorder(true)} {...css({ display: 'table-cell' })}>
        {user && user.email}
      </div>
    </div>

export default UserRow
