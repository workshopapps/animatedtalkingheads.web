import React from 'react';
import Layout from '../../components/UI/Layout';
import avatarStyles from './avatar.module.css';
import AVATAR_SET_1 from './avatar.data.set-1';
import AVATAR_SET_2 from './avatar.data.set-2';
import { Link } from 'react-router-dom';
import { routes } from '../../libs/links';
import AVATAR_SET_3 from './avatar.data.set-3';
import AVATAR_SET_4 from './avatar.data.set-4';


const Avatars = () => {

  return (
    <Layout>
      <div>

        <div className={avatarStyles.top_bg}><h1>Avatar library</h1></div>
       
        <h2 className={avatarStyles.heading}> Explore Our Avatars at VoxClips </h2>
        
        <div className='flex justify-center mt-4'><p className={avatarStyles.info}>Meet our avatars and know how and when to use them</p></div>
   

        <div className='flex justify-center'>

          <div className='px-4 md:px-40 max-w-[1532px]'>

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

            <div className={avatarStyles.section}>
              <div className={`${avatarStyles.avatars} ${avatarStyles.side}`}>
                {AVATAR_SET_3.map(({ id, image }) => (
                  <div className={avatarStyles.bckg} key={id}>
                    <img src={image} alt="Side Facing Avatar" className={avatarStyles.img} />
                  </div>
                ))}
              </div>
            </div>

            <div className={`${avatarStyles.section} ${avatarStyles.last}`}>
              <div className={`${avatarStyles.avatars} ${avatarStyles.side}`}>
                {AVATAR_SET_4.map(({ id, image }) => (
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

        <section
          className={`h-[354px] bg-white flex flex-col items-center justify-center gap-6 px-3 md:px-11 py-7 relative mt-9`}>
          
          <h2 className="text-[#292D32] text-xl md:text-4xl text-center md:px-20  font-medium">
            Let's Start Creating
          </h2>

          <Link to={routes.podcastUpload}>
            <button className={avatarStyles.get_started}>
              Get started 
            </button>
          </Link>

          <div className={`${avatarStyles.blueLeftPattern}`}></div>
          <div className={` ${avatarStyles.blueRightPattern} `}></div>
          <div className={` ${avatarStyles.lightLeftPattern}`}></div>
          <div className={` ${avatarStyles.lightRightPattern}`}></div>
        </section>
        
      </div>
    </Layout>
  );
};

export default Avatars;
