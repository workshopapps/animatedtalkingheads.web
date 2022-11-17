import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import TopNavbar from '../TopNavbar';

const Layout = ({ children }) => {
  return (
    <div>
      <TopNavbar />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
