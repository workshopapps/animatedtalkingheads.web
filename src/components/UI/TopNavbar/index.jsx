import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
import { toast } from 'react-toastify';
import UserProfile from '../UserProfile';
//import Notification from '../Notificaton';

// const miniLinks = [
//   { name: 'Support', link: '#' },
//   { name: 'Settings', link: routes.settings },
//   { name: 'Community', link: routes.community }
// ];

const TopNavbar = () => {
  const [show, setShow] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname.split('/')[1];
  const { user, logOut, setUserToken, setUser } = UserAuth();
  const [isTokenCleared, setIsTokenCleared] = useState(false);
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

  const tokenKey = localStorage.getItem('token')

  const handleSignOut = async () => {
    try {
      await logOut();
      setTimeout(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem(`${tokenKey}_date`)

        // console.log(`localStorage.getitem(${tokenKey}_date)`);
        localStorage.removeItem(`${tokenKey}_date`)

        // console.log(`localStorage.getitem(${tokenKey}_date)`)
        setUserToken('');
      }, 1000);
      toast.success('Sign out successful!', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      setUser(null);
      navigate('/sign-in');
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSessionTimeOut = async () => {
  //   try {
  //     await logOut();
  //     setTimeout(() => {
  //       localStorage.removeItem('token');
  //       localStorage.removeItem('email');
  //       localStorage.removeItem(`${tokenKey}_date`)
  //       // console.log(`localStorage.getitem(${tokenKey}_date)`)
  //       setUserToken('');
  //     }, 1000);
  //     toast.error('Session Timeout', {
  //       position: toast.POSITION.BOTTOM_RIGHT
  //     });
  //     setUser(null);
  //     // navigate('/sign-in');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  useEffect(() => {
    const tokenDate = localStorage.getItem(`${tokenKey}_date`)
    const currentDate = new Date().getTime(); // get the current date in milliseconds

    if (!isTokenCleared && currentDate - tokenDate >= 1728000000) { // 20 days in milliseconds
      // handleSessionTimeOut();
      setIsTokenCleared(true)
      return;

    }

    // const currentDate = new Date.getItem(); //get current date in milliseconds

    // if(currentDate - token)
    // if (tokenDate !== null) {
    //   console.log(tokenDate)
    // }
    console.log(tokenDate)
  })

  // const handleSessionTimeOut = async () => {
  //   try {
  //     await logOut();
  //     setTimeout(() => {
  //       localStorage.removeItem('token');
  //       localStorage.removeItem('email');
  //       localStorage.removeItem(`${tokenKey}_date`)
  //       // console.log(`localStorage.getitem(${tokenKey}_date)`)
  //       setUserToken('');
  //     }, 1000);
  //     toast.error('Session Timeout', {
  //       position: toast.POSITION.BOTTOM_RIGHT
  //     });
  //     setUser(null);
  //     // navigate('/sign-in');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  useEffect(() => {
    const tokenDate = localStorage.getItem(`${tokenKey}_date`)
    const currentDate = new Date().getTime(); // get the current date in milliseconds

    if (!isTokenCleared && currentDate - tokenDate >= 1728000000) { // 20 days in milliseconds
      // handleSessionTimeOut();
      setIsTokenCleared(true)
      return;

    }

    // const currentDate = new Date.getItem(); //get current date in milliseconds

    // if(currentDate - token)
    // if (tokenDate !== null) {
    //   console.log(tokenDate)
    // }
    console.log(tokenDate)
  })

  return (
    <div className={styles.nav}>
      <div className={`h-full flex justify-between items-center px-3 lg:px-20`}>
        <div className="flex">
          <Link to="/">
            <img height={"auto"} width={"70px"} src={headerLogo} alt="home" /> 
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
        <div className={`hidden justify-center lg:flex`}>
          {!user && (
            <Link
              to={routes.signIn}
              className="hover:border-sec-600 focus:bg-white  hover:text-sec-600 text-blue-600  border rounded-lg border-blue-600 px-4 py-2 md:px-7"
              style={{
                alignSelf: 'center',
                marginRight: '1rem'
              }}>
              Sign In
            </Link>
          )}

          <Link to={routes.podcastUpload}>
            <Button label={'Create Video'}>Create Video</Button>
          </Link>


          {/* <div>
            {user && <Notification handleSignOut={handleSignOut} />}
          </div> */}

          <div>
            {user && <UserProfile handleSignOut={handleSignOut} />}
          </div>
        </div>



        <div className='flex items-center gap-3 lg:hidden'>
          {/* {user && <Notification handleSignOut={handleSignOut} />} */}

        </div>

        <div className="flex lg:hidden items-center gap-5">

          {user && <UserProfile handleSignOut={handleSignOut} />}
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

          <div className="flex w-full justify-center items-center ">
            {user ? (
              <button
                className="w-[240px] h-[58px] hover:border-sec-600 focus:bg-white  hover:text-sec-600 text-blue-600  border rounded-lg border-blue-600 px-4 py-2 md:px-7 md:py-3"
                onClick={handleSignOut}>
                Sign out {/* {user?.displayName} */}
              </button>
            ) : (
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
