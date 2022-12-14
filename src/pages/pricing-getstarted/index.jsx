import React from 'react';
// import Layout from '../../components/UI/Layout';

import Logo from '../../assets/icons/Logo.svg';
import TopNavbar from '../../components/UI/TopNavbar';
import { Link, useNavigate } from 'react-router-dom';
import styles from './get_started.module.css';
import { UserAuth } from '../../context/AuthContext';

const GetStarted = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const loginPage = () => {
    user ? navigate('/checkout') : navigate('/sign-in?search=/checkout');
  };
  return (
    <>
      <div className={styles.get_started}>
        <TopNavbar />
        <div className={styles.mainInner}>
          <div className={styles.innerSecion}>
            <img className={styles.logo} src={Logo} alt="Logo" />
            <h2 className="lg:text-5xl text-3xl font-medium">Welcome to Voxclips!</h2>
            <p className="lg:text-3xl text-base">
              Finish upgrading your plan or enjoy our free plan
            </p>
            <div className="mt-10 w-[80%] md:w-[50%] mx-auto grid gap-5">
              <Link to="/podcast/upload">
                <button className="w-full py-4  text-white text-center rounded-lg bg-pri-600">
                  Use Forever Plan
                </button>
              </Link>

              <button
                onClick={loginPage}
                className="w-full py-4 border-pri-600 text-pri-600 text-center rounded-lg bg-white                                                                                                                   border border-[#1877f2']">
                Upgrade your Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
