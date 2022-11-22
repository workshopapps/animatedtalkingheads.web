import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HowItWorks from './';

describe('How-It-Works Test', () => {
  test('Renders How-It-Works page', () => {
    render(<HowItWorks />, { wrapper: MemoryRouter });
  });

  test('should render and match snapshot', () => {
    const { asFragment } = render(<HowItWorks />, { wrapper: MemoryRouter });
    expect(asFragment()).toMatchSnapshot();
  });
});
