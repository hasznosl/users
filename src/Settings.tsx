import React, { Dispatch, SetStateAction } from 'react'

const Settings = ({ nationality, setNationality }:
  { nationality: string | null, setNationality: Dispatch<SetStateAction<any>> }) => <div>nationality:
    <select value={nationality || ''} onChange={(e) => setNationality(e.target.value)}>
      <option value="CH">CH</option>
      <option value="ES">ES</option>
      <option value="FR">FR</option>
      <option value="GB">GB</option>
    </select>
  </div>

export default Settings