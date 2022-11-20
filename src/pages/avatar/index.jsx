import React, { useState } from 'react';
import Layout from '../../components/UI/Layout';
import AVATAR_IMAGES from './avatar.data';
import SIDE_IMAGES from './avatar-side.data';

import avatarStyles from './avatar.module.css';

const Avatars = () => {
  const [avatars] = useState(AVATAR_IMAGES);
  const [sideAvatars] = useState(SIDE_IMAGES);
  return (
    <Layout>
      <div className={avatarStyles.avatars_page}>
        <div className={avatarStyles.header}>
          <div className={avatarStyles.links}>
            <a href="/" className={avatarStyles.link}>
              Home
            </a>
            <span className={avatarStyles.gap}>&gt;</span>
            <a href="/avatars" className={avatarStyles.link}>
              Avatars
            </a>
          </div>

          <h2 className={avatarStyles.heading}>VoxClips Avatar Library</h2>
          <p className={avatarStyles.info}>Meet our avatars and know how and when to use them</p>
        </div>

        <div className={avatarStyles.section}>
          <p className={avatarStyles.text}>
            The front facing avatars are perfect for audios that have only one speaker.
          </p>
          <div className={`${avatarStyles.avatars} ${avatarStyles.front}`}>
            {avatars.map(({ id, image }) => (
              <div className={avatarStyles.bckg} key={id}>
                <img src={image} alt="Avatar" className={avatarStyles.img} />
              </div>
            ))}
          </div>
        </div>
        <div className={avatarStyles.section}>
          <p className={avatarStyles.text}>
            The side facing avatars are perfect for audios that have two speakers.
          </p>
          <div className={`${avatarStyles.avatars} ${avatarStyles.side}`}>
            {sideAvatars.map(({ id, image }) => (
              <div className={avatarStyles.bckg} key={id}>
                <img src={image} alt="Side Facing Avatar" className={avatarStyles.img} />
              </div>
            ))}
          </div>
          <button className={avatarStyles.btn}> Meet the Avatars</button>
          <a href="/avatar/scenery" className={avatarStyles.scenery}>
            Explore our Various Environments and Scenery &gt;&gt;
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Avatars;
