import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import TopNavbar from '../TopNavbar';
import styles from './styles.module.css';

const Layout = ({ children }) => {
  return (
    <div className="">
      <TopNavbar />
      <div className={styles.navDummy}></div>
      {children}
      <Footer
        bg="bg-sec-600 "
        text="text-white"
        icon="white"
        logo="block"
        width="w-[90%] mx-auto"
      />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
