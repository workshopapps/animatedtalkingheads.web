import React from 'react';
// import Layout from '../../components/UI/Layout';
import Logo from '../../assets/icons/Logo.svg';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <>
      <div>
        <div />
        <div className="mainInner">
          <div className="InnerSecion">
            <img className="logo" src={Logo} alt="Logo" />
            <h2>Welcome to Voxclips!</h2>
            <p>Finish upgrading your plan or enjoy our free plan</p>
            <div className="buttonWrapper">
              <p>Use Forever Plan</p>
              <Link to="/checkout">
                <button>
                  <label>Upgrade your Plan</label>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
