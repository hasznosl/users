
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import UserRow from './UserRow';
import userFixture from '../test/userFixture';

test('renders', async () => {

  const { getByText } = render(
    <UserRow
      user={userFixture}
      onClick={() => { }}
      backgroundColor="blue"
    />
  )

  // from userFixture
  expect(getByText('emily')).toBeTruthy() // firstname
  expect(getByText('test')).toBeTruthy() // lastname
  expect(getByText('emilytest13')).toBeTruthy() // username
  expect(getByText('emily@foo.com')).toBeTruthy() //email

})