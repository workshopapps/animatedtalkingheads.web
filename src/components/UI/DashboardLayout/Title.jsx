import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import UserProfile from '../UserProfile';
import { UserAuth } from '../../../context/AuthContext';

const Title = ({ buttonText, buttonLink, title }) => {
  const { userEmail } = UserAuth();
  return (
    <div>
      <div className="flex justify-between basis-full mb-10">
        <Link to={buttonLink}>
          <Button>{buttonText}</Button>
        </Link>
        <div className="flex gap-3 items-center">
          <UserProfile />
          <p>{userEmail && userEmail}</p>
        </div>
      </div>
      <p className="text-sec text-[32px] lg:text-[48px] font-[700]">{title}</p>
    </div>
  );
};

export default Title;
