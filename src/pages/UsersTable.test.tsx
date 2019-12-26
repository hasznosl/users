
import React from 'react'
import { render, queryByText } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import UsersTable from './UsersTable'
import userFixture from '../test/userFixture'
import userEvent from '@testing-library/user-event'

test('renders "end of user catalog" string if maxCatalogueSize is reached', async () => {

  const { getByText } = render(
    <UsersTable
      users={[userFixture]}
      maxCatalogueSize={1}
      isLoading={false}
      setSelectedUser={() => { }}
      selectedUser={userFixture}
      setUserModalVisible={() => { }}
    />
  )

  expect(getByText('End of users catalog')).toBeTruthy()

})

test('renders the user in a row', async () => {

  const { getByText } = render(
    <UsersTable
      users={[userFixture]}
      maxCatalogueSize={2}
      isLoading={false}
      setSelectedUser={() => { }}
      selectedUser={userFixture}
      setUserModalVisible={() => { }}
    />
  )
  //header
  expect(getByText('picture')).toBeTruthy()
  expect(getByText('first name')).toBeTruthy()
  expect(getByText('last name')).toBeTruthy()
  expect(getByText('username')).toBeTruthy()
  expect(getByText('email')).toBeTruthy()

  //user (from userFixture)
  expect(getByText('emily')).toBeTruthy()
  expect(getByText('test')).toBeTruthy()
  expect(getByText('emilytest13')).toBeTruthy()
  expect(getByText('emily@foo.com')).toBeTruthy()

})

test('search input field should work as expected', async () => {

  const { getByRole, getByText, container } = render(
    <UsersTable
      users={[userFixture]}
      maxCatalogueSize={2}
      isLoading={false}
      setSelectedUser={() => { }}
      selectedUser={userFixture}
      setUserModalVisible={() => { }}
    />
  )
  const searchInput = getByRole('textbox')

  expect(searchInput).toBeTruthy()

  userEvent.type(getByRole('textbox'), 'emily')
  expect(getByRole('textbox')).toHaveAttribute('value', 'emily')

  //user (from userFixture)
  expect(getByText('emily')).toBeTruthy()
  expect(getByText('test')).toBeTruthy()
  expect(getByText('emilytest13')).toBeTruthy()
  expect(getByText('emily@foo.com')).toBeTruthy()

  userEvent.type(getByRole('textbox'), 'emilyyy')
  expect(getByRole('textbox')).toHaveAttribute('value', 'emilyyy')
  // waitForDomChange({ container })
  //user (from userFixture) is not rendered any more
  expect(queryByText(container, 'emily')).toBeFalsy()
})