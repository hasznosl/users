import React, { useContext } from 'react'
import NationalityContext from '../contexts/NationalityContext';
import NationalityChekbox from '../components/NationalityCheckbox';
import { css } from 'glamor';

const selectableNationalities = ['CH', 'FR', 'ES', 'GB']

const Settings = () => {
  const { nationalities, setNationalities } = useContext(NationalityContext)
  const checked = (nat: string) => !!nationalities.find(nationality => nationality === nat)

  return <div {...css({ width: 100, })}>
    {selectableNationalities.map(nat =>
      <div {...css({ margin: '0px 10px 0px 10px', height: 30, })}>
        <NationalityChekbox
          key={nat}
          nationality={nat}
          isChecked={checked(nat)}
          onSet={() => setNationalities(nationalities.filter(nationality => nationality !== nat))}
          onUnset={() => setNationalities([...nationalities, nat])}
        />
      </div>
    )}
  </div>
}

export default Settings