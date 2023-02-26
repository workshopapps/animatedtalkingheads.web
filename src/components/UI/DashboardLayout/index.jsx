import React from 'react';
import PropTypes from 'prop-types';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex basis-1 min-h-screen">
      <div className="w-1/5 bg-sec text-white">This is the sidebar</div>
      <div className="w-4/5 ">
        {children}
        <div className="">footer</div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.element
};

export default DashboardLayout;
