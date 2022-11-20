import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../src/pages/pricing-getstarted/getStartedStyle';
import { Btn, CardWrapper, Desc, FirstDiv, Price, Tier, Title } from './cardStyle';

const Card = ({ title, slogan, buttonLabel, tier, currency, children }) => {
  return (
    <CardWrapper>
      <FirstDiv>
        <Title>{title}</Title>

        <Price>{currency}</Price>
        <Tier> {tier} </Tier>
        <Desc> {slogan}</Desc>
        <Link to="/getStarted">
          <Btn>
            <Button bgColor={'#2563EB'} width={'142px'}>
              {buttonLabel}
            </Button>
          </Btn>
        </Link>
      </FirstDiv>
      <div>{children}</div>
    </CardWrapper>
  );
};

export default Card;
