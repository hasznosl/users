import React from 'react'
import { css } from 'glamor';

const NationalityChekbox = (
  { nationality,
    isChecked,
    onClick, }:
    {
      nationality: string
      isChecked: boolean
      onClick: () => void
    }) => {

  const id = `${nationality}-checkbox`

  return <label
    {...css({
      width: '100%',
      display: 'flex',
      direction: 'row',
      alignItems: 'start',
      justifyContent: 'space-between',
      cursor: 'pointer',
      border: isChecked ? '1px solid lightGray' : ''
    })}
    htmlFor={id}
  >
    <input
      type="checkbox"
      checked={isChecked}
      onChange={onClick}
      id={id}
      {...css({ cursor: 'pointer' })}
    />
    <div >{nationality}</div>
  </label>
}


export default NationalityChekbox