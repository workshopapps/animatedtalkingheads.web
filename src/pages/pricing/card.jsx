import React from 'react';
import { Button } from '../../components/UI/Button';
import { Btn, CardWrapper, Desc, FirstDiv, Price, Tier, Title } from './cardStyle';

const Card = ({ title, tier, currency, children }) => {
  return (
    <CardWrapper>
      <FirstDiv>
        <Title>{title}</Title>

        <Price>{currency}</Price>
        <Tier> {tier} </Tier>
        <Desc> Start creating videos on the go</Desc>
        <Btn>
          <Button>Get Started</Button>
        </Btn>
      </FirstDiv>
      <div>{children}</div>
    </CardWrapper>
  );
};

export default Card;
