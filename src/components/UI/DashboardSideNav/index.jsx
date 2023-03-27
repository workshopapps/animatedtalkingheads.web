import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.css';
import { routes } from '../../../libs/links';

const links = [
  { id: 1, link: routes.dashboard, title: 'Overview', icon: 'Home' },
  { id: 2, link: routes.in_progress, title: 'In progress', icon: 'Progess' },
  { id: 3, link: routes.uploaded_audios, title: 'Audio Uploads', icon: 'Edit' },
  { id: 4, link: routes.animated_videos, title: 'Your Podcasts', icon: 'Podcast' }
];
const SideNav = () => {
  const [hovered, setHovered] = useState(links.map(() => false));
  const location = useLocation();
  return (
    <div className=" md:mt-10 py-2 ">
      <div className="w-[90%] ml-auto hidden md:block">
        <Link to="/">
          <Logo text="white" />
        </Link>
      </div>
      <div className="w-[90%] mx-auto md:w-full md:my-10 flex md:flex-col justify-between">
        {links.map((link, index) => (
          <Link to={link.link} key={link.id}>
            <div
              onMouseEnter={() => {
                const newHovered = [...hovered];
                newHovered[index] = true;
                setHovered(newHovered);
              }}
              onMouseLeave={() => {
                const newHovered = [...hovered];
                newHovered[index] = false;
                setHovered(newHovered);
              }}
              className={` ${
                location.pathname === link.link ? `${styles.color} flex-grow` : 'white'
              }`}>
              <div className="flex gap-2 px-2 md:px-0  my-2 py-3 md:w-[90%] md:ml-auto">
                <div className="flex md:w-[20%]">
                  {link.id === 1 ? (
                    <Home hovered={hovered[index]} />
                  ) : link.id === 2 ? (
                    <Progress hovered={hovered[index]} />
                  ) : link.id === 3 ? (
                    <Edit hovered={hovered[index]} />
                  ) : link.id === 4 ? (
                    <Podcast hovered={hovered[index]} />
                  ) : null}
                </div>
                <p
                  className={`hidden md:flex ${hovered[index] ? 'text-white' : 'text-[#C3C1C1]'} `}>
                  {link.title}
                </p>
                <p
                  className={`md:hidden text-base ${
                    location.pathname === link.link ? 'block' : 'hidden'
                  } ${hovered[index] ? 'text-white' : 'text-[#C3C1C1]'} `}>
                  {link.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;

const Home = ({ hovered }) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 22H21"
      stroke={`${hovered ? 'white' : ' #C3C1C1'}`}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.59998 8.37988H4C3.45 8.37988 3 8.82988 3 9.37988V17.9999C3 18.5499 3.45 18.9999 4 18.9999H5.59998C6.14998 18.9999 6.59998 18.5499 6.59998 17.9999V9.37988C6.59998 8.82988 6.14998 8.37988 5.59998 8.37988Z"
      stroke={`${hovered ? 'white' : ' #C3C1C1'}`}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.7992 5.19043H11.1992C10.6492 5.19043 10.1992 5.64043 10.1992 6.19043V18.0004C10.1992 18.5504 10.6492 19.0004 11.1992 19.0004H12.7992C13.3492 19.0004 13.7992 18.5504 13.7992 18.0004V6.19043C13.7992 5.64043 13.3492 5.19043 12.7992 5.19043Z"
      stroke={`${hovered ? 'white' : ' #C3C1C1'}`}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.0004 2H18.4004C17.8504 2 17.4004 2.45 17.4004 3V18C17.4004 18.55 17.8504 19 18.4004 19H20.0004C20.5504 19 21.0004 18.55 21.0004 18V3C21.0004 2.45 20.5504 2 20.0004 2Z"
      stroke={`${hovered ? 'white' : ' #C3C1C1'}`}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Edit = ({ hovered }) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
      stroke={`${hovered ? 'white' : ' #C3C1C1'}`}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.62 17.3005C10.7908 17.3005 11.74 16.3514 11.74 15.1805C11.74 14.0097 10.7908 13.0605 9.62 13.0605C8.44915 13.0605 7.5 14.0097 7.5 15.1805C7.5 16.3514 8.44915 17.3005 9.62 17.3005Z"
      stroke={`${hovered ? 'white' : ' #C3C1C1'}`}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.7402 15.1805V7.77051"
      stroke={`${hovered ? 'white' : ' #C3C1C1'}`}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.1302 6.7701L15.4702 7.55006C16.0402 7.74006 16.5002 8.38006 16.5002 8.98006V9.60005C16.5002 10.4101 15.8702 10.8601 15.1102 10.6001L12.7703 9.82008C12.2003 9.63008 11.7402 8.99009 11.7402 8.39009V7.7701C11.7402 6.9701 12.3602 6.5101 13.1302 6.7701Z"
      stroke={`${hovered ? 'white' : ' #C3C1C1'}`}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Podcast = ({ hovered }) => (
  <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 19.5C15.31 19.5 18 16.81 18 13.5V8.5C18 5.19 15.31 2.5 12 2.5C8.69 2.5 6 5.19 6 8.5V13.5C6 16.81 8.69 19.5 12 19.5Z"
      stroke={`${hovered ? 'white' : ' #C3C1C1'}`}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 11.5V13.5C3 18.47 7.03 22.5 12 22.5C16.97 22.5 21 18.47 21 13.5V11.5"
      stroke={`${hovered ? 'white' : ' #C3C1C1'}`}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.10938 7.97969C10.8894 7.32969 12.8294 7.32969 14.6094 7.97969"
      stroke={`${hovered ? 'white' : ' #C3C1C1'}`}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0293 10.9799C11.2293 10.6499 12.4993 10.6499 13.6993 10.9799"
      stroke={`${hovered ? 'white' : ' #C3C1C1'}`}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const Progress = ({ hovered }) => (
  <svg width={16} height={22} viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.241 1H4.76101C1.00101 1 0.711014 4.38 2.74101 6.22L13.261 15.78C15.291 17.62 15.001 21 11.241 21H4.76101C1.00101 21 0.711014 17.62 2.74101 15.78L13.261 6.22C15.291 4.38 15.001 1 11.241 1Z"
      stroke={`${hovered ? 'white' : ' #C3C1C1'}`}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Logo = ({ text }) => (
  <svg width={126} height={28} viewBox="0 0 126 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.0601 2.22363H27.5523L17.6328 17.6803H4.14062L14.0601 2.22363Z" fill="#007AFF" />
    <path
      d="M14.6545 19.1154L10.8125 25.1021H24.9447L34.8642 9.64551H24.4337L18.3563 19.1154H14.6545Z"
      fill="#312ECB"
    />
    <path
      d="M49.62 21.5L43.34 7.4H46.12L51.18 19.24H50.34L55.4 7.4H58.08L51.8 21.5H49.62ZM62.5841 21.7C61.5441 21.7 60.6441 21.4867 59.8841 21.06C59.1241 20.6333 58.5307 20.0267 58.1041 19.24C57.6907 18.4533 57.4841 17.52 57.4841 16.44C57.4841 15.36 57.6907 14.4333 58.1041 13.66C58.5307 12.8733 59.1241 12.2667 59.8841 11.84C60.6441 11.4133 61.5441 11.2 62.5841 11.2C63.6241 11.2 64.5241 11.4133 65.2841 11.84C66.0574 12.2667 66.6507 12.8733 67.0641 13.66C67.4907 14.4333 67.7041 15.36 67.7041 16.44C67.7041 17.52 67.4907 18.4533 67.0641 19.24C66.6507 20.0267 66.0574 20.6333 65.2841 21.06C64.5241 21.4867 63.6241 21.7 62.5841 21.7ZM62.5841 19.78C63.3707 19.78 63.9974 19.5067 64.4641 18.96C64.9307 18.4 65.1641 17.56 65.1641 16.44C65.1641 15.32 64.9307 14.4867 64.4641 13.94C63.9974 13.3933 63.3707 13.12 62.5841 13.12C61.7974 13.12 61.1707 13.3933 60.7041 13.94C60.2374 14.4867 60.0041 15.32 60.0041 16.44C60.0041 17.56 60.2374 18.4 60.7041 18.96C61.1707 19.5067 61.7974 19.78 62.5841 19.78ZM68.0461 21.5L72.7461 15.72V16.86L68.3061 11.4H71.2661L74.1661 15.14H73.2661L76.1661 11.4H79.1061L74.7061 16.86V15.72L79.3861 21.5H76.4061L73.2661 17.48H74.1661L71.0061 21.5H68.0461ZM84.9688 21.7C83.9288 21.7 83.0154 21.4867 82.2288 21.06C81.4554 20.6333 80.8554 20.0267 80.4288 19.24C80.0021 18.44 79.7888 17.4933 79.7888 16.4C79.7888 15.3067 80.0021 14.3733 80.4288 13.6C80.8688 12.8267 81.4754 12.2333 82.2488 11.82C83.0221 11.4067 83.9288 11.2 84.9688 11.2C85.6354 11.2 86.2821 11.3067 86.9088 11.52C87.5488 11.72 88.0688 12.0133 88.4688 12.4L87.7088 14.14C87.3488 13.8067 86.9421 13.56 86.4888 13.4C86.0488 13.2267 85.6154 13.14 85.1888 13.14C84.2954 13.14 83.5954 13.42 83.0888 13.98C82.5954 14.54 82.3488 15.3533 82.3488 16.42C82.3488 17.4867 82.5954 18.3067 83.0888 18.88C83.5954 19.4533 84.2954 19.74 85.1888 19.74C85.6021 19.74 86.0288 19.66 86.4688 19.5C86.9221 19.34 87.3354 19.0933 87.7088 18.76L88.4688 20.48C88.0554 20.8667 87.5288 21.1667 86.8888 21.38C86.2621 21.5933 85.6221 21.7 84.9688 21.7ZM90.4069 21.5V6.78H92.9069V21.5H90.4069ZM95.6217 21.5V11.4H98.1217V21.5H95.6217ZM95.4817 9.5V7.06H98.2617V9.5H95.4817ZM100.837 25.82V13.92C100.837 13.5067 100.823 13.0867 100.797 12.66C100.77 12.2333 100.73 11.8133 100.677 11.4H103.097L103.317 13.52H103.097C103.297 12.8133 103.717 12.2533 104.357 11.84C105.01 11.4133 105.763 11.2 106.617 11.2C107.51 11.2 108.29 11.4133 108.957 11.84C109.623 12.2533 110.143 12.8533 110.517 13.64C110.89 14.4133 111.077 15.3467 111.077 16.44C111.077 17.5333 110.89 18.4733 110.517 19.26C110.143 20.0467 109.623 20.6533 108.957 21.08C108.29 21.4933 107.51 21.7 106.617 21.7C105.777 21.7 105.037 21.4933 104.397 21.08C103.757 20.6667 103.33 20.1133 103.117 19.42H103.337V25.82H100.837ZM105.917 19.78C106.717 19.78 107.357 19.5067 107.837 18.96C108.317 18.4 108.557 17.56 108.557 16.44C108.557 15.32 108.317 14.4867 107.837 13.94C107.357 13.3933 106.717 13.12 105.917 13.12C105.13 13.12 104.497 13.3933 104.017 13.94C103.537 14.4867 103.297 15.32 103.297 16.44C103.297 17.56 103.537 18.4 104.017 18.96C104.497 19.5067 105.13 19.78 105.917 19.78ZM116.839 21.7C115.972 21.7 115.172 21.6 114.439 21.4C113.719 21.1867 113.112 20.8933 112.619 20.52L113.319 18.84C113.826 19.1867 114.386 19.4533 114.999 19.64C115.612 19.8267 116.232 19.92 116.859 19.92C117.526 19.92 118.019 19.8067 118.339 19.58C118.672 19.3533 118.839 19.0467 118.839 18.66C118.839 18.3533 118.732 18.1133 118.519 17.94C118.319 17.7533 117.992 17.6133 117.539 17.52L115.539 17.14C114.686 16.9533 114.032 16.6333 113.579 16.18C113.139 15.7267 112.919 15.1333 112.919 14.4C112.919 13.7733 113.086 13.22 113.419 12.74C113.766 12.26 114.252 11.8867 114.879 11.62C115.519 11.34 116.266 11.2 117.119 11.2C117.866 11.2 118.566 11.3 119.219 11.5C119.886 11.7 120.446 12 120.899 12.4L120.179 14.02C119.766 13.6867 119.292 13.4267 118.759 13.24C118.226 13.0533 117.706 12.96 117.199 12.96C116.506 12.96 115.999 13.0867 115.679 13.34C115.359 13.58 115.199 13.8933 115.199 14.28C115.199 14.5733 115.292 14.82 115.479 15.02C115.679 15.2067 115.986 15.3467 116.399 15.44L118.399 15.82C119.292 15.9933 119.966 16.3 120.419 16.74C120.886 17.1667 121.119 17.7533 121.119 18.5C121.119 19.1667 120.939 19.74 120.579 20.22C120.219 20.7 119.719 21.0667 119.079 21.32C118.439 21.5733 117.692 21.7 116.839 21.7Z"
      fill={text}
    />
  </svg>
);
