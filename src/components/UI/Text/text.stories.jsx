import React from 'react';

import { Text } from './index';

export default {
  title: 'text',
  component: Text,
  arhTypes: {
    ghost: { controls: 'type' }
  }
};

function Template(args) {
  return <Text {...args} />;
}

export const Header1 = Template.bind({});
export const Text4 = Template.bind({});
Header1.args = {
  type: 'header1',
  w: 'bold',
  label: 'big header'
};

Text4.args = {
  type: 'text4',
  w: 'md',
  label: 'small text'
};
