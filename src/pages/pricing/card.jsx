import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, slogan, buttonLabel, tier, currency, children }) => {
  return (
    <div>
      <div>
        <p>{title}</p>

        <p>{currency}</p>
        <p> {tier} </p>
        <p> {slogan}</p>
        <Link to="/getStarted">
          <div>
            <button>{buttonLabel}</button>
          </div>
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Card;
