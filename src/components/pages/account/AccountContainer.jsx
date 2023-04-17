import React from 'react';
import Layout from '../../UI/Layout';
import PageTitle from '../../UI/page-title';
import brush from '../../../assets/icons/account/brush.svg';
import people from '../../../assets/icons/account/people.svg';
import brush_a from '../../../assets/icons/account/brush_a.svg';
import people_a from '../../../assets/icons/account/people_a.svg';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../libs/links';

const AccountContainer = ({children, link }) => {

  const navigation = useNavigate()

  return (
    <Layout>

      <PageTitle title="Account" />

      <div className='flex flex-col items-center font-bold text-[#292D32] border-b-[1px] border-gray'>

        <tabs className="flex text-sm py-2 space-x-28">
          <tab onClick={() => navigation(routes.myAccount)} className={`flex ${link === "account" && 'text-[#2563EB]'} cursor-pointer`}><img src={link === "account" ? brush_a : brush} width={"20px"} height="20px" /> <p className='ml-2'>Account settings </p> </tab>
          <tab onClick={() => navigation(routes.myBilling)} className={`flex ${link === "bill" && 'text-[#2563EB]'} cursor-pointer`}><img src={link === "bill"? people_a : people} width={"20px"} height="20px" />  <p className='ml-2'> Pay details </p> </tab>
        </tabs>

      </div>

      <div className='flex justify-center px-4 md:px-10 lg:px-20 pt-6 text-[#292D32]'>
        {children}
      </div>
    
    </Layout>
  );
};


export default AccountContainer