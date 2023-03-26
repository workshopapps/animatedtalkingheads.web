import React, { useState } from 'react';
import { UserAuth } from '../../context/AuthContext';
import profile from '../../components/UI/UserProfile/avatar.png';
import AccountContainer from '../../components/pages/account/AccountContainer';
import InfoField, { PasswordField, UpgradeField } from '../../components/pages/account/InfoField';
import { Select } from '../../components/pages/account/Input';
import IntegrationSection from '../../components/pages/account/IntegrationSection';
import ModalWrapper from '../../components/UI/Modal/ModalWrapper';
import UploadImage from '../../components/pages/account/UploadImage';

const Account = () => {

  const { user } = UserAuth();

  const [uploadImg, setUploadImg] = useState(false);

  console.log(user)

  const handleUploadClose = () => {
    setUploadImg(false)
  }

  return (
    <AccountContainer link={"account"}>

      <div className='grid grid-cols-1 lg:grid-cols-8 w-full max-w-[1440px]'>

        <div className='col-span-3'>

          <div className='flex flex-col items-center'>

            <img className='rounded-full h-40 w-40' src={profile} />

            <button onClick={() => setUploadImg(false)} className='text-[#2158D2]'>Edit</button> 

          </div>

        </div>

        <div className='col-span-4'>

          <InfoField field={"Name"} value={"John Doe"} /> 

          <InfoField field={"Email"} value={localStorage.getItem("email")} /> 

          <PasswordField field={"Password"} value={"Enable two-factor authentication"}  /> 

          <UpgradeField />

          <div className='my-6 text-[#292D32] border-b-[1px] border-gray'></div>

          <InfoField field={"Language"} value={"English"} value2={"More languages coming soon!"} /> 
            
          <div className='w-72'>

            <Select id="theme" label="Theme" mb
              value="" onChange={() => console.log("eee")}  />

          </div>

          <div className='my-6 text-[#292D32] border-b-[1px] border-gray'></div>

          <div className='flex mb-2'> 
            <h3 className='font-semibold '>Integrations</h3> 
            <p className='mt-1 ml-2 bg-[#2158D2] text-white text-[10px] px-2 rounded-sm text-center h-4'>PRO</p>
          </div>

          <IntegrationSection />

          <h3 className='font-semibold mt-10 mb-2'> Account</h3>

          <button className='text-[#FF453A] mb-10'> Delete account </button>
        
        </div>

      </div>

      <ModalWrapper>

      </ModalWrapper>

      <UploadImage open={uploadImg} handleClose={handleUploadClose} />
      
    </AccountContainer>
  );
};


export default Account