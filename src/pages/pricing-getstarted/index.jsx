import React from 'react';
// import Layout from '../../components/UI/Layout';
import { GetStartedWrapper, Button } from './getStartedStyle';
import Logo from '../../assets/icons/Logo.svg';
import TopNavbar from '../../components/UI/TopNavbar';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <>
      <GetStartedWrapper>
        <TopNavbar />
        <div className="mainInner">
          <div className="InnerSecion">
            <img className="logo" src={Logo} alt="Logo" />
            <h2>Welcome to Voxclips!</h2>
            <p>Finish upgrading your plan or enjoy our free plan</p>
            <div className="buttonWrapper">
              <Button bgColor="#1877f2">Use Forever Plan</Button>
              <Link to="/checkout">
                <Button border="1px solid #1877f2">
                  <label style={{ color: '#1877f2' }}>Upgrade your Plan</label>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </GetStartedWrapper>
    </>
  );
};

export default GetStarted;
