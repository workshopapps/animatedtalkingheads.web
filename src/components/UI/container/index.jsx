import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <div className="">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.element
};

export default Container;
