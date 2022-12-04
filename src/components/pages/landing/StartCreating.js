import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../UI/Button';
import styles from './index.module.css';
import arrowBack from '../../../assets/icons/background.svg';

const StartCreating = () => {
  return (
    <section>
      <div className="absolute w-full my-0 z-0">
        <img src={arrowBack} className="object-cover w-full h-full" />
      </div>
      <div className={`${styles.red}mx-auto max-w-[1440px] py-20 relative z-10`}>
        <div className="flex flex-col gap-10justify-center items-center align-middle">
          <p className="font-bold mb-10 w-[70%] mx-auto text-lg lg:text-4xl text-center">
            Let's start creating!!
          </p>
          <div className="flex justify-center mx-auto">
            <Link to="/podcast/upload">
              <Button label="Getting Started">Getting Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartCreating;
