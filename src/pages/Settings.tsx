import React, { useContext } from 'react'
import NationalityContext from '../contexts/NationalityContext';
import NationalityChekbox from '../components/NationalityCheckbox';
import { css } from 'glamor';
import { ROW_HEIGHT } from '../utils/styles';

const selectableNationalities = ['CH', 'FR', 'ES', 'GB']

const Settings = () => {
  const { nationalities, setNationalities } = useContext(NationalityContext)
  const checked = (nat: string) => !!nationalities.find(nationality => nationality === nat)

  return <div {...css({ width: 100, marginTop: ROW_HEIGHT })}>
    {selectableNationalities.map(nat =>
      <div {...css({ margin: '0px 10px 0px 10px', height: 30 })}
        key={nat}>
        <NationalityChekbox
          nationality={nat}
          isChecked={checked(nat)}
          onClick={
            () => {
              if (checked(nat)) {
                setNationalities(nationalities.filter(nationality => nationality !== nat).sort())
              } else {
                setNationalities([...nationalities, nat].sort())
              }
            }
          }
        />
      </div>
    )}
  </div>
}

export default Settings