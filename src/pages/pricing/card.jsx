import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/UI/Button';

import styles from './card.module.css';
const Card = ({ title, slogan, buttonLabel, tier, currency, children }) => {
  return (
    <div className={`${styles.card_wrapper}h-[78rem] bg-[#fafafa] border rounded-lg py-5 px-2`}>
      <div className="text-center grid gap-4">
        <p className="text-pri-700 text-xl lg:text-2xl">{title}</p>
        <p className="text-2xl font-medium lg:text-3xl">{currency}</p>
        <p className="lg:text-base text-sm text-[#8F9092] opacity-80"> {tier} </p>
        <p className=" text-xl lg:text-2xl"> {slogan}</p>
        <Link to="/getStarted">
          <div className="mt-5 flex justify-center">
            <Button label={buttonLabel} />
          </div>
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Card;
