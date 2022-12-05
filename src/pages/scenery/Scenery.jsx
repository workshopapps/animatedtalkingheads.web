import React, { useState } from 'react';
import Layout from '../../components/UI/Layout';
import BackgroundLayout from './props.jsx';
import backgroundStyles from './scenery.module.css';
import { ReactComponent as LocationIcon } from '../../assets/images/scenery/location.svg';
import PageTitle from '../../components/UI/page-title';

const Scenery = () => {
  const [click, setClick] = useState(false);

  const handleClick = (index) => () => {
    setClick((state) => ({
      ...state, // <-- copy previous state
      [index]: !state[index] // <-- update value by id
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <Layout>
      <main>
        <PageTitle title="Background library" />

        <div className={backgroundStyles.backgroundContainer}>
          <div className="flex flex-col items-center">
            <h2 className="font-semibold text-2xl text-center md:text-4xl text-[#252525]">
              {' '}
              Explore Our Environment at VoxClips{' '}
            </h2>

            <h3 className="mt-4 md:mt-6 mb-8 md:mb-24 font-normal text-center text-base md:text-2xl text-[#292D32]">
              Visit our studios and know how and when to use them
            </h3>
          </div>

          <div className={backgroundStyles.figureContainer}>
            {BackgroundLayout.map((val) => (
              <figure key={val.id} className={backgroundStyles.figure}>
                <img src={val.avatar} alt={val.name} className={backgroundStyles.image} />

                <figcaption className={backgroundStyles.figCaption}>
                  <h4 className="mt-2 md:mt-0 mb-2.5 md:mb-6 font-semibold text-lg md:text-2xl text-[#292D32]">
                    {val.name}
                  </h4>

                  <h5 className={`${backgroundStyles.location} mb-2.5 md:mb-6 text-2xl`}>
                    {' '}
                    <LocationIcon className="mr-3" /> {val.location}
                  </h5>

                  <p
                    key={val.id}
                    className={`${backgroundStyles.description} ${
                      click[val.id] ? backgroundStyles.ellipsis : ''
                    }`}>
                    {val.description}
                  </p>

                  <p className={backgroundStyles.expand} onClick={handleClick(val.id)}>
                    {click[val.id] ? 'Collapse' : 'Expand'}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <button onClick={scrollToTop} className="m-7 md:m-24 text-sm md:text-base text-[#292D32]">
            Back to Top
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default Scenery;
