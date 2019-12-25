
import React from 'react'
import NationalityCheckbox from './NationalityCheckbox';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';

describe('NationalityCheckbox', () => {

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
      render(<NationalityCheckbox
        nationality="foo"
        isChecked={true}
        onSet={() => { }}
        onUnset={() => { }}
      />, container)
    })

    expect(container.textContent).toBe('foo')

  })
})