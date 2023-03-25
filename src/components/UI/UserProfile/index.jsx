import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Progress from '../../../assets/dropdown/Progress.svg';
// import Upload from '../../../assets/dropdown/Upload.svg';
// import Podcast from '../../../assets/dropdown/Podcast.svg';
import Upgrade from '../../../assets/dropdown/Upgrade.svg';
//import Settings from '../../../assets/dropdown/Settings.svg';
import Logout from '../../../assets/dropdown/Logout.svg';
import { motion } from 'framer-motion';
import { menuAnimate } from './animation';
import { routes } from '../../../libs/links';
import { UserAuth } from '../../../context/AuthContext';
import profile from './avatar.png';
import axios from 'axios';

const UserProfile = ({ handleSignOut }) => {
  const { userEmail, user } = UserAuth();
  const [data, setData] = useState(null);
  const [plan, setPlan] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');

  console.log(data);

  const show = () => {
    setOpen(true);
  };

  const hide = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);

  const getData = () => {
    const url = 'https://api.voxclips.hng.tech/api/v1/subscription';
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${user}`
        }
      })
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
          checkPlan(res.data);
        }
      })
      .catch((err) => {
        setError(err.message);
        console.log(error);
      });
  };
  const checkPlan = (data_arr) => {
    if (data_arr.length < 1) {
      setPlan('Free Plan');
    } else if (data_arr.length > 0) {
      setPlan('Pro Plan');
    }
  };
  return (
    <div onClick={open ? hide : show}>
      <div className="relative flex items-center justify-center">
        <img
          height={'40px'}
          width={'40px'}
          src={profile}
          className="shadow-lg rounded-full lg:ml-6 cursor-pointer"
        />
        {/* <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full  bg-blue-600  flex
items-center justify-center'>
          <p className='text-xs text-white font-semibold'>1</p>
        </div> */}
      </div>
      <motion.div
        className={`${open ? 'show' : 'hidden'} lg:hidden`}
        animate={open ? 'enter' : 'exit'}
        variants={menuAnimate}>
        <div className={`${styles.dropdown_menu} ${open ? 'active' : 'inactive'}`}>
          <Link to={routes.myAccount}>
            <div className="flex justify-between items-center py-5">
              <img
                height={'30px'}
                width={'30px'}
                src={profile}
                className="rounded-full ml-3 cursor-pointer shadow-lg"
                />
                {userEmail && <p className=" text-sec-700 text-base">{userEmail}</p>}
              <h1 className=" text-sec-700 text-2xl"></h1>
            </div>
          </Link>
          <ul>
            <DropdownItem to={routes.dashboard} hide={hide} img={Progress} text={'Dashboard'} />

            <DropdownItem
              to={routes.pricing}
              hide={hide}
              img={Upgrade}
              text={`Upgrade ${`(${plan})`}`}
            />
            {/* <DropdownItem to={routes.settings} hide={hide} img={Settings} text={'Settings'} /> */}
            <DropdownItem
              to={'#'}
              hide={hide}
              onClick={handleSignOut}
              img={Logout}
              text={'Sign out'}
            />
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

function DropdownItem(props) {
  return (
    <li
      onClick={() => {
        props.onClick();
        props.hide();
      }}
      className={styles.dropdownItem}>
      <img src={props.img}></img>
      <Link to={props.to}>{props.text}</Link>
    </li>
  );
}

export default UserProfile;
