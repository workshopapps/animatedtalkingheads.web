import React from 'react';
import DashboardLayout from '../../../components/UI/DashboardLayout';
import Bell from './images/bell.svg';
import UserImg from './images/user-icon.svg';
import Dropdown from './images/arrow-down.svg';
import Star from './images/blue-star.svg';
import Podcasts from './images/podcast-upload.png';
import Animation from './images/animation.png';
import Create from './images/create.svg';
import Share from './images/share.svg';
import Facebook from './images/facebook.svg';
import Twitter from './images/twitter.svg';
import Instagram from './images/instagram.svg';
import World from './images/world.svg';
import DropdownBlue from './images/blue-arrow.svg';
import Logo from './images/voxclips-logo.svg';

const AnimatedVideos = () => {
  return (
    <DashboardLayout>
      <div className="bg-[#f5f5f5] -z-50 pb-20 md:pb-56 pt-10">
        <div className="flex items-center justify-between px-12  relative ml-auto mr-auto">
          <div className="text-lg mb-4 md:mb-6 md:text-2xl text-[#2d2d2d]">Welcome Wanjiku!</div>
          <div className="flex items-center gap-x-3 ">
            <div className="pr-2 w-7 md:w-full">
              <img className="w-full" src={Bell} alt="notification" />
            </div>
            <img className="w-9 md:w-full" src={UserImg} alt="user icon" />
            <h5 className="text-xl hidden md:block text-[#292d32] ">Wanjiku</h5>
            <img className="w-4 md:w-full" src={Dropdown} alt="dropdown button" />
          </div>
        </div>
        <div className="flex relative ml-auto mr-auto px-12 mb-12 md:mb-20">
          <h1 className="text-2xl md:text-4xl w-3/5 font-bold text-[#292d32]">
            Find and share all your animated podcasts.
          </h1>
          <div className="flex">
            <img src={Star} alt="star" />
          </div>
        </div>

        <div className="md:flex grid gap-y-8 mb-10">
          <div className="md:w-2/5 w-4/5 relative ml-auto mr-auto h-72 md:h-80 grid gap-y-8 rounded-lg">
            <img
              className="absolute top-0 left-0 w-full h-full rounded-lg object-cover -z-5"
              src={Podcasts}
              alt=""
            />
            <div className="text-2xl grid place-items-center">
              <p className="text-center grid gap-y-4 place-items-center z-10 text-3xl md:text-4xl font-semibold text-[#292d32]">
                Podcasts <span className="block">Uploaded</span>{' '}
                <span className="block font-bold text-4xl md:text-5xl">25</span>
              </p>
            </div>
          </div>
          <div className="md:w-2/5 w-4/5 relative ml-auto mr-auto h-72 md:h-80 grid gap-y-8 rounded-lg">
            <img
              className="absolute top-0 left-0 w-full rounded-lg h-full -z-5 object-cover"
              src={Animation}
              alt=""
            />
            <div className="text-2xl grid place-items-center">
              <p className="text-center grid gap-y-4 place-items-center z-10 text-[#292d32] text-3xl md:text-4xl font-semibold">
                Animations <span className="block">Created</span>{' '}
                <span className="block font-bold text-4xl md:text-5xl">25</span>
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
      <footer className="bg-white py-10">
        <div className="px-8 ">
          <div className="grid md:grid-cols-4 grid-cols-2  w-4/5 ml-auto mr-auto gap-y-4 gap-x-14  md:gap-x-20 justify-between items-center">
            <a
              href="#"
              className="text-[#2158D2] justify-self-start font-mulish font-normal text-base">
              How it works
            </a>
            <a href="#" className="text-[#2158D2] font-mulish font-normal text-base ">
              About
            </a>
            <a href="#" className="text-[#2158D2] font-mulish font-normal text-base ">
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
        </div>
        <div className="border-t border-solid my-12 border-[#5f5f5f] "></div>
        <div className="flex items-center justify-center md:justify-start md:px-8 gap-x-2">
          <a className="flex gap-x-2 text-xl font-bold text-[#292d32] " href="#">
            {' '}
            <img src={Logo} alt="logo of voxclips" /> Voxclips
          </a>
          <p className=" text-base text-[#292d32]"> Copyright 2022 Voxclips &#169; </p>
        </div>
      </footer>
    </DashboardLayout>
  );
};

export default AnimatedVideos;
