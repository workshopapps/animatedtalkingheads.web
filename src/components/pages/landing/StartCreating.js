import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../UI/Button';
import styles from './index.module.css';
// import arrowBack from '../../../assets/icons/background.svg';

const StartCreating = () => {
  return (
    <section className={styles.background}>
      <div className={` mx-auto max-w-[1440px] py-20 relative z-10`}>
        <div className="flex flex-col gap-10justify-center items-center align-middle">
          <p className="font-bold mb-10 w-[70%] mx-auto text-lg lg:text-4xl text-center">
            Let's start creating!!
          </p>
          <div className="flex justify-center mx-auto">
            <Link to="/generated-videos">
              <Button label="Getting Started">Getting Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartCreating;
