import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../assets/dashboard/profile.png';
import { IoIosArrowDown } from 'react-icons/io';
import { Button } from '../Button';

const Title = ({ buttonText, buttonLink, title }) => {
  return (
    <div>
      <div className="flex justify-between basis-full mb-10">
        <Link to={buttonLink}>
          <Button>{buttonText}</Button>
        </Link>
        <div className="flex gap-3 items-center">
          <div>
            <img src={profile} alt="profile avatar" className="w-[40px] h-[40px] rounded-full" />
          </div>
          <p>Wanjiku</p>
          <IoIosArrowDown />
        </div>
      </div>
      <p className="text-sec text-[32px] lg:text-[48px] font-[700]">{title}</p>
    </div>
  );
};

export default Title;
