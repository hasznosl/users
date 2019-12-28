import React from 'react'
import { css } from "glamor";
import { blackBorder, sticky, SEARCH_HEIGHT, ROW_HEIGHT, getTableCellFlexProperties } from '../utils/styles';

const flexNumbersHeaderLabels = [
  { flexNumber: 1, label: 'picture' },
  { flexNumber: 2, label: 'first name' },
  { flexNumber: 2, label: 'last name' },
  { flexNumber: 3, label: 'username' },
  { flexNumber: 5, label: 'email' },
]

const headerCell = (label: string, flexNumber: number) => <div
  key={label}
  {...blackBorder(true)}
  {...css({
    ...getTableCellFlexProperties(flexNumber),
    backgroundColor: 'white',
    height: ROW_HEIGHT,
    borderTop: '1px solid black',
    minWidth: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
    <div
      {...sticky(SEARCH_HEIGHT)}
      {...css({
        display: 'flex',
        flexDirection: 'row',
        flexFlow: 'row-wrap',
      })} >{
        flexNumbersHeaderLabels.map(
          ({ flexNumber, label }) => headerCell(label, flexNumber)
        )
      }
    </div>
    :
    // user row
    <div
      {...css({
        cursor: 'pointer',
        backgroundColor,
        display: 'flex',
        flexFlow: 'row-wrap',
        flexDirection: 'row'
      })}
      onClick={onClick}
    >
      <div {...blackBorder(true)} {...css(
        getTableCellFlexProperties(flexNumbersHeaderLabels[0].flexNumber),
      )}>
        <img src={user ? user.picture.thumbnail : ''} />
      </div>
      <div {...blackBorder(true)} {...css(
        getTableCellFlexProperties(flexNumbersHeaderLabels[1].flexNumber),
      )}>
        {user && user.name.first}
      </div>
      <div {...blackBorder(true)} {...css(
        getTableCellFlexProperties(flexNumbersHeaderLabels[2].flexNumber),
      )}>
        {user && user.name.last}
      </div>
      <div {...blackBorder(true)} {...css(
        getTableCellFlexProperties(flexNumbersHeaderLabels[3].flexNumber),
      )}>
        {user && user.login.username}
      </div>
      <div {...blackBorder(true)} {...css(
        getTableCellFlexProperties(flexNumbersHeaderLabels[4].flexNumber),
      )}>
        {user && user.email}
      </div>
    </div>

export default UserRow
