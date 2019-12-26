
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import UserModal from './UserModal';
import userFixture from '../test/userFixture';
import ReactModal from 'react-modal';

test('renders user modal', async () => {
  ReactModal.setAppElement(document.createElement('div'));

  const { getByRole } = render(
    <UserModal
      positionX={0}
      positionY={0}
      setVisible={() => { }}
      visible={true}
      user={userFixture}
    />
  )

  expect(getByRole('button')).toHaveTextContent('Close')

})