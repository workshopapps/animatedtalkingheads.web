import React from 'react';
import { Link } from 'react-router-dom';

import styles from './card.module.css';
const Card = ({ title, slogan, buttonLabel, tier, currency, children, buttonLink }) => {
  return (
    <div
      className={`${styles.card_wrapper}min-h-[860px] lg:min-h-[78rem] bg-[#fafafa] border rounded-lg py-5 px-2 `}>
      <div className="text-center grid gap-4 w-[90%] mx-auto">
        <p className="text-sec-700 text-lg lg:text-xl">{title}</p>
        <p className="text-2xl font-semibold lg:text-3xl">{currency}</p>
        <p className="lg:text-base text-sm text-[#ACADAF] opacity-80">{tier}</p>
        <p className=" text-base"> {slogan}</p>
        <div></div>
        <Link to={buttonLink}>
          <div className="mt-5 flex justify-center">
            <button className="w-full text-base text-white bg-blue-600  border rounded-lg hover:opacity-80 px-4 py-2 md:px-7 md:py-4">
              {buttonLabel}
            </button>
          </div>
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Card;
