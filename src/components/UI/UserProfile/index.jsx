import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';
import { routes } from '../../../libs/links';
import { toast } from 'react-toastify';
import { FaRegUserCircle } from 'react-icons/fa';
import Progress from '../../../assets/dropdown/Progress.svg';
import Upload from '../../../assets/dropdown/Upload.svg';
import Podcast from '../../../assets/dropdown/Podcast.svg';
import Upgrade from '../../../assets/dropdown/Upgrade.svg';
import Settings from '../../../assets/dropdown/Settings.svg';
import Logout from '../../../assets/dropdown/Logout.svg';
import { UserAuth } from '../../../context/AuthContext';

const NavSign = () => {
  const { logOut, setUserToken, setUser } = UserAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });
  const handleSignOut = async () => {
    try {
      await logOut();
      setTimeout(() => {
        localStorage.removeItem('token');
        setUserToken('');
        setUser(null);
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
  return (
    <div>
      <div>
        <div className="">
          <div ref={menuRef}>
            <div className={styles.menutrigger}>
              <div
                className="relative flex items-center justify-center pt-2 "
                onClick={() => {
                  setOpen(!open);
                }}>
                <FaRegUserCircle className="text-textColor text-2xl ml-6 cursor-pointer " />
                <div
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full  bg-blue-600  flex
    items-center justify-center">
                  <p className="text-xs text-white font-semibold">1</p>
                </div>
              </div>
            </div>
            <div className={`${styles.dropdown_menu} ${open ? 'block' : 'hidden'}`}>
              <div className="flex justify-between items-center md:py-5">
                <FaRegUserCircle className="text-textColor text-2xl md:ml-3 cursor-pointer text-sec-700" />
                <h1 className=" text-sec-700 text-2xl">wanjiku@gmail.com</h1>
              </div>
              <ul>
                <DropdownItem img={Progress} text={'In progress'} />
                <Link to={routes.dashboard_audios}>
                  <DropdownItem img={Upload} text={'My uploads'} />
                </Link>
                <DropdownItem img={Podcast} text={'My video podcasts'} />
                <DropdownItem img={Upgrade} text={'Upgrade'} />
                <DropdownItem img={Settings} text={'Settings'} />
                <div onClick={handleSignOut}>
                  <DropdownItem img={Logout} text={'Sign out'} />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function DropdownItem(props) {
  return (
    <li className={styles.dropdownItem}>
      <img src={props.img}></img>
      <p> {props.text} </p>
    </li>
  );
}

export default NavSign;
