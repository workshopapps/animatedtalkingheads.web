import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../Button';
import styles from './styles.module.css';
import headerLogo from './../../../assets/icons/header_logo.svg';
import menuIcon from './../../../assets/icons/menu-icon.png';
import closeIcon from './../../../assets/icons/close.png';
import { links, routes } from '../../../libs/links';
import { BiChevronDown } from 'react-icons/bi';

const miniLinks = [
  { name: 'Support', link: '#' },
  { name: 'Settings', link: routes.settings },
  { name: 'Community', link: routes.community }
];

const TopNavbar = () => {
  const [show, setShow] = React.useState(false);
  const location = useLocation();
  const pathname = location.pathname.split('/')[1];
  const close = () => {
    setShow(false);
  };

  return (
    <div className={styles.nav}>
      <div className={`h-full flex justify-between items-center px-3 lg:px-20`}>
        <div className="flex">
          <Link to="/">
            <img src={headerLogo} alt="home" />
          </Link>
        </div>
        <div className={`${styles.links} hidden items-center  md:flex md:grow justify-between`}>
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

          <div className={`${styles.dropdown} px-1 space-x-3 relative middle `}>
            <h1
              className={
                pathname === 'avatars' || pathname === 'explore-avatar' ? `${styles.active}` : ''
              }>
              Avatars
            </h1>

            <BiChevronDown />

            <div
              className={`${styles.dropdown_list} slide-up border w-[150px] space-y-3 rounded-md shadow-xl p-3 absolute left-0 top-6 bg-white`}>
              <Link className={`block w-full`} to={'/avatars'}>
                Avatars
              </Link>

              <Link className={` block w-full`} to={'/explore-avatar'}>
                Explore Avatars
              </Link>
            </div>
          </div>
        </div>
        <div className={`hidden md:flex`}>
          <Link to={routes.podcastUpload}>
            <Button label={'Create Video'}>Create Video</Button>
          </Link>
        </div>
        <button className="md:hidden hover:border-0" onClick={() => setShow(!show)}>
          <img src={show ? closeIcon : menuIcon} alt="home" />
        </button>
      </div>

      <div className={`${styles.menu} ${show ? '' : 'hidden'} px-3 py-10 md:hidden`}>
        <div className={`${styles.links}`}>
          {links.map((link, index) => (
            <Link onClick={close} className="block" key={index} to={link.link}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className={`${styles.line}`}> </div>

        <div className={`${styles.links2}`}>
          {miniLinks.map((link, index) => (
            <Link onClick={close} className="block" key={index} to={link.link}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className={`${styles.line}`}> </div>

        <div className="flex w-full justify-center h-28 items-center">
          <Link onClick={close} className={styles.createVideo} to={routes.podcastUpload}>
            <button> Create Video </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
