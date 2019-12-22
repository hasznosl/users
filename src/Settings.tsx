import React, { useContext } from 'react'
import NationalityContext from './NationalityContext';
import NationalityChekbox from './NationalityCheckbox';

const Settings = () => {

  const { nationalities, setNationalities } = useContext(NationalityContext)

  const checked = (nat: string) => !!nationalities.find(nationality => nationality === nat)

  return <div>
    <NationalityChekbox
      nationality="CH"
      isChecked={checked('CH')}
      onSet={() => setNationalities(nationalities.filter(nationality => nationality !== 'CH'))}
      onUnset={() => setNationalities([...nationalities, 'CH'])}
    />
    <NationalityChekbox
      nationality="FR"
      isChecked={checked('FR')}
      onSet={() => setNationalities(nationalities.filter(nationality => nationality !== 'FR'))}
      onUnset={() => setNationalities([...nationalities, 'FR'])}
    />
    <NationalityChekbox
      nationality="ES"
      isChecked={checked('ES')}
      onSet={() => setNationalities(nationalities.filter(nationality => nationality !== 'ES'))}
      onUnset={() => setNationalities([...nationalities, 'ES'])}
    />
    <NationalityChekbox
      nationality="GB"
      isChecked={checked('GB')}
      onSet={() => setNationalities(nationalities.filter(nationality => nationality !== 'GB'))}
      onUnset={() => setNationalities([...nationalities, 'GB'])}
    />
  </div>
}

export default Settings