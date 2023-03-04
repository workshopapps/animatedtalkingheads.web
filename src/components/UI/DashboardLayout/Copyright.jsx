import React from 'react';
import { Logo } from '../DashboardSideNav';

const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <div className="border-[#5F5F5F] border-t border-opacity-20 py-10">
      <div className="w-[85%] ml-auto flex gap-10 items-center">
        <Logo text="#292D32" />
        <p className="text-black">Copyright {year} Voxclips &#169;</p>
      </div>
    </div>
  );
};

export default Copyright;
