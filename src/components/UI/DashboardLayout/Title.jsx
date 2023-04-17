import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import UserProfile from '../UserProfile';
import { UserAuth } from '../../../context/AuthContext';
import { Logo } from '../DashboardSideNav';

const Title = ({ hide = false, buttonText, buttonLink, title }) => {
  const { userEmail } = UserAuth();
  return (
    <>
      <div className="md:block hidden">
        <div className="flex justify-between basis-full mb-10">
          <Link to={buttonLink}>
            <Button>
              <p>{buttonText}</p>
            </Button>
          </Link>
          <div className="flex gap-3 items-center">
            <UserProfile />
            <p className="">{userEmail && userEmail}</p>
          </div>
        </div>
        <p className="text-sec text-[32px] lg:text-[48px] font-[700]">{title}</p>
      </div>
      <div className={` md:hidden`}>
        <div className="absolute top-0 w-full right-0 py-2 bg-white ">
          <div className="flex justify-between w-[90%] mx-auto">
            <Link to="/">
              <Logo text="black" />
            </Link>
            <UserProfile />
          </div>
        </div>
        <div className={` mt-10 `}>
          <div className={`flex justify-between ${hide && 'hidden'}`}>
            <p className="text-sec text-[32px] lg:text-[48px] font-[700]">{title}</p>

            <Button>
              <Link to={buttonLink}>
                <Microphone />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;

export const Microphone = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="md:hidden"
    {...props}>
    <path
      d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.35156 9.65039V11.3504C4.35156 15.5704 7.78156 19.0004 12.0016 19.0004C16.2216 19.0004 19.6516 15.5704 19.6516 11.3504V9.65039"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.6113 6.43109C11.5113 6.10109 12.4913 6.10109 13.3913 6.43109"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.1992 8.55031C11.7292 8.41031 12.2792 8.41031 12.8092 8.55031"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 19V22"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
