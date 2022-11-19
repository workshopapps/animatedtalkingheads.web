import React from 'react';
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import UploadPodcast from '.';


it('renders page', () => {
  render(<UploadPodcast/>)
  const title = screen.getByText("upload audio")
  expeect(title).toBeInTheDocument()
});
