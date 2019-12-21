import React, { useContext } from 'react'
import NationalityContext from './NationalityContext';

const Settings = () => {

  const { nationality, setNationality } = useContext(NationalityContext)

  return <div>nationality:
    <select value={nationality || ''} onChange={(e) => setNationality(e.target.value)}>
      <option value="CH">CH</option>
      <option value="ES">ES</option>
      <option value="FR">FR</option>
      <option value="GB">GB</option>
    </select>
  </div>
}

export default Settings