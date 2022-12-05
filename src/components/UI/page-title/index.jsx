import React from 'react';

const PageTitle = ({ title }) => {
  return (
    <div className=" h-[90px] lg:h-[128px] flex flex-col justify-center bg-[#171D2E] text-[#fff]">
      <h2 className="font-semibold text-[30px] lg:text-[48px] text-center">{title}</h2>
    </div>
  );
};

export default PageTitle;
