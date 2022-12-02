import React, { useState } from 'react';
import Layout from '../../components/UI/Layout';
import SIDE_IMAGES from './avatar-side.data';
import avatarStyles from './avatar.module.css';
import { Button } from '../../components/UI/Button';
import AVATAR_SET_1 from './avatar.data.set-1';
import AVATAR_SET_2 from './avatar.data.set-2';
import { Link } from 'react-router-dom';
import { routes } from '../../libs/links';

const Avatars = () => {
  const [sideAvatars] = useState(SIDE_IMAGES);
  return (
    <Layout>
      <div>

        <div className={avatarStyles.top_bg}><h1>Avatar library</h1></div>
        <h2 className={avatarStyles.heading}> Explore Our Avatars at VoxClips </h2>
        <div className='flex justify-center mt-4'><p className={avatarStyles.info}>Meet our avatars and know how and when to use them</p></div>
   

        <div className='flex justify-center'>

          <div className='px-40 max-w-[1532px]'>

            <div className={avatarStyles.section}>
              <div className={`${avatarStyles.avatars} ${avatarStyles.front}`}>
                {AVATAR_SET_1.map(({ id, image }) => (
                  <div className={avatarStyles.bckg} key={id}>
                    <img src={image} alt="Avatar" className={avatarStyles.img} />
                  </div>
                ))}
              </div>
            </div>

            <div className={avatarStyles.section}>
              <div className={`${avatarStyles.avatars} ${avatarStyles.side}`}>
                {AVATAR_SET_2.map(({ id, image }) => (
                  <div className={avatarStyles.bckg} key={id}>
                    <img src={image} alt="Side Facing Avatar" className={avatarStyles.img} />
                  </div>
                ))}
              </div>
            </div>


            <div className='flex justify-center'>
              <Link to={routes.scenery} className={avatarStyles.last_link}> Explore various environments and scenery {'>>'} </Link>
            </div>

          </div>

        </div>

      </div>
    </Layout>
  );
};

export default Avatars;
