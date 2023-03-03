import React from 'react';
import PropTypes from 'prop-types';
import SideNav from '../DashboardSideNav';
import Footer from '../Footer';
import Copyright from './Copyright';

const DashboardLayout = ({ children }) => {
  return (
    <div className=" bg-[#F5F5F5]">
      <div className="  flex basis-1 min-h-screen mx-auto max-w-[1512px]">
        <div className="w-1/5 bg-sec text-white">
          <SideNav />
        </div>
        <div className="w-4/5 flex flex-col min-h-screen flex-grow">
          {children}
          <div className=" w-full mt-auto bg-white">
            <Footer
              bg="bg-white"
              text="text-blue-600"
              icon="#2158D2"
              logo="hidden"
              width="w-[80%] mr-auto"
            />
            <Copyright />
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.element
};

export default DashboardLayout;
