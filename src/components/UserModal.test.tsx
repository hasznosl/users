
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import UserModal from './UserModal';
import userFixture from '../test/userFixture';
import ReactModal from 'react-modal';
import SelectedUserContext from '../contexts/SelectedUserContext';

test('renders', async () => {
  ReactModal.setAppElement(document.createElement('div'));

  const { getByRole, getByText } = render(
    <SelectedUserContext.Provider value={{
      userModalVisible: true,
      setSelectedUser: () => { },
      setUserModalVisible: () => { },
      selectedUser: userFixture
    }}>
      <UserModal
        positionX={0}
        positionY={0}
      />
    </SelectedUserContext.Provider>
  )

  expect(getByText('street')).toBeTruthy()
  expect(getByText('city')).toBeTruthy()
  expect(getByText('postcode')).toBeTruthy()
  expect(getByText('cell')).toBeTruthy()
  expect(getByText('phone')).toBeTruthy()
  expect(getByRole('button')).toHaveTextContent('Close')

})