
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NationalityCheckbox from './NationalityCheckbox';

test('renders correctly when checked', async () => {

  const { getByText, getByLabelText } = render(
    <NationalityCheckbox
      nationality="foo"
      isChecked={true}
      onClick={() => { }}
    />
  )

  expect(getByText('foo')).toBeTruthy()
  expect((getByLabelText('foo') as any)._valueTracker.getValue()).toBe("true")
})


test('renders correctly when unchecked', async () => {

  const { getByText, getByLabelText } = render(
    <NationalityCheckbox
      nationality="foo"
      isChecked={false}
      onClick={() => { }}
    />
  )
  expect((getByLabelText('foo') as any)._valueTracker.getValue()).toBe("false")
})