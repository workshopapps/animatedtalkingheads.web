import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { FaRegUserCircle } from 'react-icons/fa';
import Progress from '../../../assets/dropdown/Progress.svg';
import Upload from '../../../assets/dropdown/Upload.svg';
import Podcast from '../../../assets/dropdown/Podcast.svg';
import Upgrade from '../../../assets/dropdown/Upgrade.svg';
//import Settings from '../../../assets/dropdown/Settings.svg';
import Logout from '../../../assets/dropdown/Logout.svg';
import { motion } from 'framer-motion';
import { menuAnimate } from './animation';
import { routes } from '../../../libs/links';
import { UserAuth } from '../../../context/AuthContext';
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
    const url = 'https://api.voxclips.hng.tech/subscription';
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
      <div className="relative flex items-center justify-center pt-[2px] ">
        <FaRegUserCircle size={30} className="lg:ml-6 cursor-pointer " />
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
          <div className="flex justify-between items-center py-5">
            <FaRegUserCircle className="text-textColor text-2xl ml-3 cursor-pointer text-sec-700" />

            {userEmail && <p className=" text-sec-700 text-base">{userEmail}</p>}
            <h1 className=" text-sec-700 text-2xl"></h1>
          </div>
          <ul>
            <DropdownItem
              to={routes.dashboard_progress}
              hide={hide}
              img={Progress}
              text={'In progress'}
            />
            <DropdownItem
              to={routes.dashboard_audios}
              hide={hide}
              img={Upload}
              text={'My uploads'}
            />
            <DropdownItem
              to={routes.animatedPodcast}
              hide={hide}
              img={Podcast}
              text={'My video podcasts'}
            />
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
