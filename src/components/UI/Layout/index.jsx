import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import TopNavbar from '../TopNavbar';
import styles from './styles.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <TopNavbar />
      <div className={styles.navDummy}></div>
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
