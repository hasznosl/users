import React from 'react'
import { css } from 'glamor';

const NationalityChekbox = (
  { nationality,
    isChecked,
    onSet,
    onUnset }:
    {
      nationality: string
      isChecked: boolean
      onSet: () => void
      onUnset: () => void
    }) => <div
      {...css({
        width: '100%',
        display: 'flex',
        direction: 'row',
        alignItems: 'start',
        justifyContent: 'space-between',
        cursor: 'pointer',
      })}
      onClick={() => {
        if (isChecked) {
          onSet()
        } else {
          onUnset()
        }
      }}

    >
    <input
      type="checkbox"
      checked={isChecked}
      {...css({ cursor: 'pointer' })}
    />
    <div>{nationality}</div>
  </div>


export default NationalityChekbox