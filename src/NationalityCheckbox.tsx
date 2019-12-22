import React from 'react'

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
    }) => <>
    <div>{nationality}</div>
    <input
      type="checkbox"
      checked={isChecked}
      onChange={() => {
        if (isChecked) {
          onSet()
        } else {
          onUnset()
        }
      }}
    />
  </>


export default NationalityChekbox