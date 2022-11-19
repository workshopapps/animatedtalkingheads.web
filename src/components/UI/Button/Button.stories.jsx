import React from 'react';

import { Button } from './index';

export default {
  title: 'button',
  component: Button,
  arhTypes: {
    ghost: { controls: 'type' }
  }
};

function Template(args) {
  return <Button {...args} />;
}

export const Ghost = Template.bind({});
export const Primary = Template.bind({});
Ghost.args = {
  ghost: true,
  label: 'button'
};

Primary.args = {
  isLoading: true,
  label: 'button'
};
