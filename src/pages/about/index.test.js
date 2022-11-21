import React from 'react';
import { render } from '@testing-library/react';
import About from './';
import { MemoryRouter } from 'react-router-dom';

describe('About Test', () => {
  test('Renders About', () => {
    render(<About />, { wrapper: MemoryRouter });
  });

  test('should render and match snapshot', () => {
    const { asFragment } = render(<About />, { wrapper: MemoryRouter });
    expect(asFragment()).toMatchSnapshot();
  });
});

