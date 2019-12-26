
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import InfoItem from './InfoItem';

test('renders user modal', async () => {

  const { getByText } = render(
    <InfoItem
      label="foo"
      value="bar"
    />
  )

  expect(getByText('foo')).toBeTruthy()
  expect(getByText('bar')).toBeTruthy()

})