
import React from 'react'
import InfoItem from './InfoItem';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';

describe('InfoItem', () => {

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
      render(<InfoItem
        label="foo"
        value="bar"
      />, container)
    })

    expect(container.textContent).toBe('foobar')

  })
})