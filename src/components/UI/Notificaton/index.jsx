import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Hamburger from 'hamburger-react'
import { Button } from '../Button';
import styles from './styles.module.css';
import headerLogo from './../../../assets/icons/header_logo.svg';
import { links, linksMobile, routes } from '../../../libs/links';
import { BiChevronDown } from 'react-icons/bi';
// import { UserAuth } from '../../../context/AuthContext';
import { motion } from "framer-motion";
import { menuAnimate } from './animation';
// import { toast } from 'react-toastify';
import { IoNotificationsOutline } from 'react-icons/io5';
import Smile from '../../../assets/dropdown/smile.png';



// const miniLinks = [
//   { name: 'Support', link: '#' },
//   { name: 'Settings', link: routes.settings },
//   { name: 'Community', link: routes.community }
// ];

const NavSign = () => {
  const [show, setShow] = React.useState(false);
  const location = useLocation();
  // const navigate = useNavigate();
  const pathname = location.pathname.split('/')[1];
  // const { user, logOut, setUserToken, setUser } = UserAuth();
  const close = () => {
    setShow(false);
  };



  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);


    return () => {
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className={styles.nav}>
      <div className={`h-full flex justify-between items-center px-3 lg:px-20`}>
        <div className="flex">
          <Link to="/">
            <img src={headerLogo} alt="home" />
          </Link>
        </div>
        <div className={`${styles.links} hidden items-center  lg:flex lg:grow justify-between`}>
          {links.map((link, index) => (
            <Link
              className={`${`/${pathname}` === link.link || `/${pathname}/1` === link.link
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
          {/* { user && (<Link onClick={handleSignOut} to={routes.signIn} style={{ color: '#2563EB', alignSelf: 'center', marginRight:'1.875rem' }} > Sign out</Link>)} */}

          <Link to={routes.podcastUpload}>
            <Button label={'Create Video'}>Create Video</Button>
          </Link>
          <div className='relative flex items-center justify-center'>
            <IoNotificationsOutline className='text-textColor text-2xl ml-6 cursor-pointer' />
            <div className='absolute -top-2 -left-2 w-5 h-5 rounded-full  text-blue-600  flex
    items-center justify-center'>
              <p className='text-xs text-white font-semibold'>1</p>
            </div>
          </div>

          <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
            <div className='flex items-center'>
              <div>
                <img src={Smile} alt='img' />
                <h5>Upload successful!</h5>
              </div>
            </div>

          </div>

        </div>



        <div className='lg:hidden'>
          <Hamburger size={28} toggled={show} toggle={() => setShow(!show)} />
        </div>

      </div>


      <motion.div
        className={`${styles.menu} ${show ? "show" : 'hidden'} px-3 py-10 lg:hidden`}
        animate={show ? "enter" : "exit"}
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
              <button className='text-[#fefefe]'> Create Video </button>
            </Link>
          </div>


        </div>
      </motion.div>

    </div>
  );
};

// function DropdownItem(props) {
//   return (
//     <li className={styles.dropdownItem}>
//       <img src={props.img}></img>
//       <a> {props.text} </a>

//     </li>
//   );
// }

export default NavSign;
