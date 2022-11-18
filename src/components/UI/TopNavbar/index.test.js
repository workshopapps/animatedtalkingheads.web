import React from 'react';
import { render, screen } from '@testing-library/react';
import TopNavbar from './';
import { BrowserRouter } from 'react-router-dom';

test('Renders TopNavbar', () => {
    render(<TopNavbar />, {wrapper: BrowserRouter})


});
