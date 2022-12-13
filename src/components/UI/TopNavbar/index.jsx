import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import { Button } from '../Button';
import styles from './styles.module.css';
import headerLogo from './../../../assets/icons/header_logo.svg';
import { links, linksMobile, routes } from '../../../libs/links';
import { BiChevronDown } from 'react-icons/bi';
import { UserAuth } from '../../../context/AuthContext';
import { motion } from 'framer-motion';
import { menuAnimate } from './animation';
import NavSign from '../UserProfile';

// const miniLinks = [
//   { name: 'Support', link: '#' },
//   { name: 'Settings', link: routes.settings },
//   { name: 'Community', link: routes.community }
// ];

const TopNavbar = () => {
  const [show, setShow] = React.useState(false);
  const location = useLocation();
  const pathname = location.pathname.split('/')[1];
  const { user } = UserAuth();
  const close = () => {
    setShow(false);
  };

  const [signInPath, setSignInPath] = useState(false);

  // const currentPath = '/sign-in'
  // console.log(location.pathname)
  useEffect(() => {
    if (location.pathname == '/sign-in') {
      setSignInPath(true);
    }
  }, [signInPath]);

  return (
    <div className={styles.nav}>
      <div className={`container mx-auto h-full flex justify-between items-center w-[90%]`}>
        <div className="flex">
          <Link to="/">
            <img src={headerLogo} alt="home" />
          </Link>
        </div>
        <div className={`${styles.links} hidden items-center  lg:flex lg:grow justify-between`}>
          {links.map((link, index) => (
            <Link
              className={`${
                `/${pathname}` === link.link || `/${pathname}/1` === link.link
                  ? `${styles.active}`
                  : ''
              } block`}
              key={index}
              to={link.link}>
              {link.name}
            </Link>
          ))}

          <div className={`${styles.dropdown} ${styles.links} px-1 space-x-1 relative middle `}>
            <a
              className={
                pathname === routes.avatars || pathname === routes.scenery ? `${styles.active}` : ''
              }>
              Avatars
            </a>

            <BiChevronDown />

            <div
              className={`${styles.dropdown_list} slide-up border w-[200px] space-y-3 rounded-md shadow-xl p-3 absolute left-0 top-6 bg-white`}>
              <Link className={`block w-full`} to={routes.avatars}>
                Avatars
              </Link>

              <Link className={` block w-full`} to={routes.scenery}>
                Explore scenery
              </Link>
            </div>
          </div>
          <Link to={routes.contact}>Contact us</Link>
        </div>
        <div className={`hidden lg:flex`}>
          <Link to={routes.podcastUpload}>
            <Button label={'Create Video'}>Create Video</Button>
          </Link>

          {/* { user && (<Link onClick={handleSignOut} to={routes.signIn} style={{ color: '#2563EB', alignSelf: 'center', marginRight:'1.875rem' }} > Sign out</Link>)} */}
          {user ? (
            <NavSign />
          ) : (
            <Link
              to={routes.signIn}
              className="hover:border-sec-600 focus:bg-white  hover:text-sec-600 text-blue-600  border rounded-lg border-blue-600 px-4 py-2 md:px-7"
              style={{
                alignSelf: 'center',
                marginLeft: '1rem'
              }}>
              Sign In
            </Link>
          )}

          {/* <Notification /> */}
        </div>

        <div className="lg:hidden flex gap-5 items-center">
          {user && <NavSign />}
          <Hamburger size={28} toggled={show} toggle={() => setShow(!show)} />
        </div>
      </div>

      <motion.div
        className={`${styles.menu} ${show ? 'show' : 'hidden'} px-3 py-10 lg:hidden`}
        animate={show ? 'enter' : 'exit'}
        variants={menuAnimate}>
        <div className={``}>
          <div className={`${styles.links}`}>
            {linksMobile.map((link, index) => (
              <Link onClick={close} className="block" key={index} to={link.link}>
                {link.name}
              </Link>
            ))}
          </div>

          <div className={`${styles.line}`}> </div>

          {/* <div className={`${styles.links2}`}>
            {miniLinks.map((link, index) => (
              <Link onClick={close} className="block" key={index} to={link.link}>
                {link.name}
              </Link>
            ))}
          </div>

          <div className={`${styles.line}`}> </div> */}

          <div className="flex w-full justify-center mt-6 items-center">
            <Link onClick={close} className={styles.createVideo} to={routes.podcastUpload}>
              <button className="text-[#fefefe]"> Create Video </button>
            </Link>
          </div>

          <div className="flex w-full justify-center items-center">
            {!user && (
              <Link to={routes.signIn}>
                <button className="w-[240px] h-[58px] hover:border-sec-600 focus:bg-white  hover:text-sec-600 text-blue-600  border rounded-lg border-blue-600 px-4 py-2 md:px-7 md:py-3">
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TopNavbar;
