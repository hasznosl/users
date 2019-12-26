
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom';

test('renders user modal', async () => {

  const { getAllByRole } = render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  )
  expect(getAllByRole("link")[0]).toHaveTextContent("Home")
  expect(getAllByRole("link")[0]).toHaveAttribute('href', '/')

  expect(getAllByRole("link")[1]).toHaveTextContent("Settings")
  expect(getAllByRole("link")[1]).toHaveAttribute('href', '/settings')
})