import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import TopNavbar from './';

describe('NavBar Test', () => {
  test('Renders TopNavbar', () => {
    render(<TopNavbar />, { wrapper: MemoryRouter });
  });

  test('should render and match snapshot', () => {
    const { asFragment } = render(<TopNavbar />, { wrapper: MemoryRouter });
    expect(asFragment()).toMatchSnapshot();
  });
});
