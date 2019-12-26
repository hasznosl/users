
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import UsersTable from './UsersTable';
import userFixture from '../test/userFixture';

test('renders', async () => {

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