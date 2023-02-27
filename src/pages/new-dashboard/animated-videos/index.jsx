import React from 'react';
import DashboardLayout from '../../../components/UI/DashboardLayout';
import Bell from './images/bell.svg';
import UserImg from './images/user-icon.svg';
import Dropdown from './images/arrow-down.svg';
import Star from './images/blue-star.svg';
import Podcasts from './images/podcast-upload.png';
import Create from './images/create.svg';
import Share from './images/share.svg';
import Facebook from './images/facebook.svg';
import Twitter from './images/twitter.svg';
import Instagram from './images/instagram.svg';
import World from './images/world.svg';
import DropdownBlue from './images/blue-arrow.svg';

const AnimatedVideos = () => {
  return (
    <DashboardLayout>
      <div className="bg-[#f5f5f5] -z-50 pb-20 md:pb-56">
        <div className="flex">
          <div className="text-2xl">Welcome Wanjiku!</div>
          <div className="flex items-center">
            <img src={Bell} alt="notification" />
            <img src={UserImg} alt="user icon" />
            <h5 className="text-xl hidden md:block">Wanjiku</h5>
            <img src={Dropdown} alt="dropdown button" />
          </div>
        </div>
        <div className="flex">
          <h1 className="text-2xl max-w-md">Find and share all your animated podcasts</h1>
          <div className="flex">
            <img src={Star} alt="star" />
          </div>
        </div>

        <div className="md:flex grid gap-y-8 mb-10">
          <div className="md:w-2/5 w-4/5 relative ml-auto mr-auto h-72 md:h-80 grid gap-y-8">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover -z-5"
              src={Podcasts}
              alt=""
            />
            <div className="text-2xl grid place-items-center">
              <p className="text-center grid gap-y-4 place-items-center z-10 ">
                Podcasts <span className="block">Uploaded</span> <span className="block">25</span>
              </p>
            </div>
          </div>
          <div className="md:w-2/5 w-4/5 relative ml-auto mr-auto h-72 md:h-80 grid gap-y-8">
            <img
              className="absolute top-0 left-0 w-full h-full -z-5 object-cover"
              src={Podcasts}
              alt=""
            />
            <div className="text-2xl grid place-items-center">
              <p className="text-center grid gap-y-4 place-items-center z-10">
                Animations <span className="block">Created</span> <span className="block">25</span>
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex grid gap-y-4">
          <div className="bg-[#2158D2] rounded-lg w-4/5 text-center ml-auto mr-auto flex justify-center items-center py-4 gap-x-2 md:w-2/5 ">
            <img src={Create} alt="" />
            <p className="text-white">Create video</p>
          </div>
          <div className="bg-[#fff] rounded-lg w-4/5 text-center ml-auto mr-auto flex justify-center items-center py-4 border-2 border-solid border-[#2158D2] gap-x-2 md:w-2/5">
            <img src={Share} alt="" />
            <p className="text-[#2158d2]">Share an animation</p>
          </div>
        </div>
      </div>
      <footer className="bg-white py-10 px-8">
        <div className="flex flex-wrap w-4/5 ml-auto mr-auto gap-y-4 gap-x-14 sm:gap-x-32 md:gap-x-56 justify-between items-center">
          <a href="#" className="text-[#2158D2] font-mulish font-normal text-base">
            How it works
          </a>
          <a href="#" className="text-[#2158D2] font-mulish font-normal text-base">
            About
          </a>
          <a href="#" className="text-[#2158D2] font-mulish font-normal text-base">
            Terms of Use
          </a>
          <a href="#" className="text-[#2158D2] font-mulish font-normal text-base">
            Connect with us
          </a>
          <a href="#" className="text-[#2158D2] font-mulish font-normal text-base">
            Use Cases
          </a>
          <a href="#" className="text-[#2158D2] font-mulish font-normal text-base">
            FAQs
          </a>
          <a href="#" className="text-[#2158D2] font-mulish font-normal text-base">
            APIs
          </a>
          <div className="flex gap-x-4">
            <a href="#">
              <img src={Facebook} alt="facebook" />{' '}
            </a>
            <a href="#">
              <img src={Twitter} alt="twitter" />{' '}
            </a>
            <a href="#">
              <img src={Instagram} alt="instagram" />{' '}
            </a>
          </div>
          <a href="#" className="text-[#2158D2] font-mulish font-normal text-base">
            Avatars
          </a>
          <a href="#" className="text-[#2158D2] font-mulish font-normal text-base">
            Pricing
          </a>
          <a href="#" className="text-[#2158D2] font-mulish font-normal text-base">
            Contact Us
          </a>
          <div className="flex gap-x-1 items-center">
            <a href="#">
              <img src={World} alt="" />{' '}
            </a>
            <a href="#" className="text-[#2158D2] font-mulish font-normal text-base">
              English
            </a>
            <a href="#">
              <img src={DropdownBlue} alt="" />{' '}
            </a>
          </div>
        </div>
      </footer>
    </DashboardLayout>
  );
};

export default AnimatedVideos;
