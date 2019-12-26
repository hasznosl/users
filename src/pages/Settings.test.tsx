
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Settings from './Settings';

test('renders', async () => {

  const { getByLabelText } = render(
    <Settings />
  )

  expect(getByLabelText('CH')).toBeTruthy()
  expect(getByLabelText('FR')).toBeTruthy()
  expect(getByLabelText('GB')).toBeTruthy()
  expect(getByLabelText('ES')).toBeTruthy()
})