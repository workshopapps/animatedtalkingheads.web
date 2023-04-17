import React from 'react';
import PropTypes from 'prop-types';
import SideNav from '../DashboardSideNav';
// import Footer from '../Footer';
// import Copyright from './Copyright';

const DashboardLayout = ({ children }) => {
  return (
    <div className=" bg-[#F5F5F5]">
      <div className="md:flex basis-1 min-h-screen mx-auto">
        <div className="z-10 fixed w-full bottom-0 md:relative md:w-1/5 bg-sec text-white rounded-tl-lg rounded-tr-lg md:rounded-none">
          <SideNav />
        </div>
        <div className="md:w-4/5 mb-20 flex flex-col min-h-screen flex-grow">
          {children}
          {/* <div className="w-full mt-auto bg-white">
            <Footer
              bg="bg-white"
              text="text-blue-600"
              icon="#2158D2"
              logo="hidden"
              width="w-[80%] mr-auto"
            />
            <Copyright />
          </div> */}
        </div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.element
};

export default DashboardLayout;
