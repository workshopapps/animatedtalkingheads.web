import React from 'react';
import PropTypes from 'prop-types';
import SideNav from '../DashboardSideNav';
import Footer from '../Footer';
import Copyright from './Copyright';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex basis-1 min-h-screen mx-auto max-w-[1512px]">
      <div className="w-1/5 bg-sec text-white">
        <SideNav />
      </div>
      <div className="w-4/5 ">
        {children}
        <div className="">
          <Footer
            bg="bg-white"
            text="text-blue-600"
            icon="#2158D2"
            logo="hidden"
            width="w-[80%] mr-auto"
          />
        </div>
        <Copyright />
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.element
};

export default DashboardLayout;
