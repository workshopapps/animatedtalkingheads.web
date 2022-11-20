// import React, { useState } from 'react';
import styles from './styles.module.css';
import headerLogo from './../../../assets/icons/header-logo.png';
import menuIcon from './../../../assets/icons/menu-icon.png';
import { navLinks } from '../../../libs/links';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { Button } from '../Button';

const ApiNav = () => {
  return (
    <div className={styles.nav}>
      <div className={`h-full flex justify-between items-center px-3 lg:px-20`}>
        <div className="flex">
          <Link to="/">
            {' '}
            <img src={headerLogo} alt="home" />
          </Link>
        </div>
        <div className={`${styles.links} hidden lg:flex justify-between basis-3/5`}>
          {navLinks.map((link, index) => (
            <Link className="block" key={index} to={link.link}>
              {' '}
              {link.name}{' '}
            </Link>
          ))}
        </div>
        <div className={`${styles.create} hidden lg:flex gap-1`}>
          <Link to="/api/login" className=" px-1 py-3">
            <Button ghost label="Login" />
          </Link>
          <Link to="/api/login" className=" px-1 py-3">
            <Button label="Register" />
          </Link>
        </div>
        <button className="lg:hidden">
          <img src={menuIcon} alt="home" />
        </button>
      </div>
    </div>
  );
};
export default ApiNav;

{
  {
    /* <div className={`${styles.create} hidden md:flex`}>
          <Link to="/podcast/upload" className="btn px-10 py-3">
            Create Video
          </Link>
        </div> */
  }
  /* <div className={`h-full flex justify-between items-center px-3 lg:px-20`}>
<div className="flex">
  <Link to="/"> <img src={headerLogo} alt="home"/></Link>
</div>
<div className={`${styles.links} hidden md:flex justify-between basis-3/5`}>
  { links.map( (link, index) => <Link className="block" key={index} to={link.link}> {link.name} </Link> ) }
</div>
<div className={`${styles.create} hidden md:flex`}>
  <Link to="/podcast/upload" className="btn px-10 py-3">
    Create Video
  </Link>
</div>
<button className="md:hidden">
  <img src={menuIcon} alt="home"/>
</button>
</div>
</div>
); */
}

<nav>
  <div className="mx-w-[1440px] h-full flex items-center justify-between p-4 sm:p-5 lg:p-6">
    <div>
      <Link to="/">
        <img src={headerLogo} alt="logo" />
      </Link>
    </div>
    <ul className="hidden lg:flex gap-8 ">
      <li>
        <Link to="/api/documentation">Documentation</Link>
      </li>
      <li>
        <Link to="/api/database">Database</Link>
      </li>
      <li>
        <Link to="/api/status">Api Status</Link>
      </li>
      <li>
        <Link to="/api/history">Api History</Link>
      </li>
    </ul>
    <div className="flex items-center gap-5">
      <Button ghost label="Login" />
      <Button label="Register As a Developer" />
    </div>
    <div className="hidden">
      <AiOutlineMenu size={30} />
    </div>
  </div>
</nav>;
