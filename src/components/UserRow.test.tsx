
import React from 'react'
import UserRow from './UserRow';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import userFixture from '../test/userFixture';

describe('UserRow', () => {

  let container: any = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('should render', () => {

    act(() => {
      render(<UserRow
        user={userFixture}
        onClick={() => { }}
        backgroundColor="blue"
      />, container)
    })

    expect(container.textContent).toBe('firstNamelastNameusername')

  })
})