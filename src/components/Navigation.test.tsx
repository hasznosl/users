
import React from 'react'
import Navigation from './Navigation';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

describe('Navigation', () => {

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
      render(
        <BrowserRouter >
          <Navigation />
        </BrowserRouter >, container)
    })

    expect(container.textContent).toBe('HomeSettings')

  })
})