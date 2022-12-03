import React from 'react';
import { Link } from 'react-router-dom';

import styles from './card.module.css';
const Card = ({ title, slogan, buttonLabel, tier, currency, children }) => {
  return (
    <div className={`${styles.card_wrapper}h-[78rem] bg-[#fafafa] border rounded-lg py-5 px-2 `}>
      <div className="text-center grid gap-4 w-[90%] mx-auto">
        <p className="text-pri-700 text-xl lg:text-2xl">{title}</p>
        <p className="text-2xl font-medium lg:text-3xl">{currency}</p>
        <p className="lg:text-base text-sm text-[#8F9092] opacity-80"> {tier} </p>
        <p className=" text-xl lg:text-2xl"> {slogan}</p>
        <div></div>
        <Link to="/getStarted">
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
