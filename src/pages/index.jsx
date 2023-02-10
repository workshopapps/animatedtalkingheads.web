import Layout from '../components/UI/Layout';
// import ChatIcon from '../assets/icons/chat-icon.svg';
import './styles/index.css';
// import { Button } from '../components/UI/Button';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import Lottie from 'lottie-react';
// import { Button } from '../components/UI/Button';
import heroAnimation from '../assets/animations/VoxClipHeroLottie.json';
// import heroAnimation from '../assets/animations/VoxClipHeroLottie.json';
import Quotes from '../assets/icons/quotes.svg';
import MarkImg from '../assets/images/mark-essien.png';
import LavyImg from '../assets/images/lavy-engine.png';
import NonsoImg from '../assets/images/Nonso.png';
import Freestyle from '../components/pages/landing/Freestyle';
import Transform from '../components/pages/landing/Transform';
import StartCreating from '../components/pages/landing/StartCreating';
// import { Button } from '../components/UI/Button';

// import ChatBox from '../components/ChatBox';
import ReactTooltip from 'react-tooltip';
// import NavSign from '../components/UI/NavSign';



const Home = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: heroAnimation   ,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };

  return (
    <Layout>

      <section className="home-section">
        <div className="home ">
          <div className="hero-container">
            <div data-aos="fade-right" className="desktop-lhs">
              <div className="hero-text">
                <h1 className="hero-heading">
                  Heads that talk,<br></br> On your podcast.
                </h1>
                <p className="hero-par">
                  Turn audio podcasts into a video with our various characters customizable to your
                  liking.
                </p>
              </div>
              <div className="hero-btns">
                <Link style={{ color: 'white' }} to="/podcast/upload">
                  <div>
                    <button className="btn" data-tip data-for="registerTip">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12 15.5c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4S8 3.79 8 6v5.5c0 2.21 1.79 4 4 4Z"
                        />
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M4.35 9.65v1.7C4.35 15.57 7.78 19 12 19c4.22 0 7.65-3.43 7.65-7.65v-1.7M10.61 6.43c.9-.33 1.88-.33 2.78 0M11.2 8.55c.53-.14 1.08-.14 1.61 0M12 19v3"
                        />
                      </svg>
                      Upload audio
                    </button>
                    <ReactTooltip id="registerTip" place="bottom" effect="solid">
                      Upload a audio
                    </ReactTooltip>
                  </div>
                </Link>
                <Link style={{ color: 'white' }} to="/how-it-works">
                  <div className>
                    <button className="btn2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
                        />
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeWidth="1.5"
                          d="M8.74 12.23v-1.67c0-2.08 1.47-2.93 3.27-1.89l1.45.84 1.45.84c1.8 1.04 1.8 2.74 0 3.78l-1.45.84-1.45.84c-1.8 1.04-3.27.19-3.27-1.89v-1.69Z"
                        />
                      </svg>
                      How it works
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <div data-aos="fade-left" className="desktop-rhs">
              <div className="lottie">
                <Lottie loop={true} animationData={heroAnimation} />
              </div>
            </div>
          </div>
        </div>
      </section>{' '}
      <section className="bg-[#F5F5F5] ">
        <div data-aos="fade-up" className="py-[60px] container mx-auto">
          <h3 className="text-center text-xl pb-12 md:pb-32 md:text-[40px] text-[#292d32]  ">
            4 Simple clicks gets you there
          </h3>
          <div className="md:flex justify-between items-center flex-wrap">
            <div className="mx-auto pb-5">
              <h3 className="border shadow bg-white border-solid border-black border-opacity-10 rounded-[50%] md:w-[74px] md:h-[74px] h-9 w-9   text-center grid items-center text-base md:text-[32px] mx-auto">
                1
              </h3>
              <p className="mx-auto w-44 md:w-52  text-center  md:text-2xl text-[14px] pt-3 md:pt-8">
                Upload Your Audio Podcast
              </p>
            </div>
            <div className="mx-auto pb-5">
              <h3 className="border  bg-white border-solid border-black border-opacity-10 rounded-[50%] md:w-[74px] md:h-[74px] h-9 w-9   text-center grid items-center text-base md:text-[32px] mx-auto ">
                2
              </h3>
              <p className="mx-auto w-44 md:w-52  text-center  md:text-2xl text-[14px] pt-3 md:pt-8">
                Choose Your Options
              </p>
            </div>
            <div className="border border-solid border-black border-opacity-10 hidden md:grid"></div>
            <div className="mx-auto pb-5">
              <h3 className="border bg-white border-solid border-black border-opacity-10 rounded-[50%] md:w-[74px] md:h-[74px] h-9 w-9   text-center grid items-center text-base md:text-[32px] mx-auto">
                3
              </h3>
              <p className="mx-auto w-44 md:w-52  text-center  md:text-2xl text-[14px] pt-3 md:pt-8">
                Customize Scene and Character
              </p>
            </div>
            <div className="mx-auto pb-5">
              <h3 className="border bg-white border-solid border-black border-opacity-10 rounded-[50%] md:w-[74px] md:h-[74px] h-9 w-9  text-center grid items-center text-base md:text-[32px] mx-auto ">
                4
              </h3>
              <p className="mx-auto w-44 md:w-52  text-center  md:text-2xl text-[14px] pt-3 md:pt-8">
                Download/Share Your Podcast{' '}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-sec-700 text-white pb-5 ">
        <div data-aos="fade-up" className="container mx-auto w-[90%] ">
          <h3 className="text-[292d32] pt-20  text-center font-bold text-xl pb-10 md:pb-[72px] md:text-[40px]">
            What people are saying
          </h3>
          <div className="grid md:grid-cols-3  gap-12 justify-around pb-[40px] md:px-6">
            <div data-aos="flip-left" className=" px-8 bg-white mx-auto  mb-12 md:mb-0 md:px-8 md:h-60 h-36 grid items-center relative rounded-lg md:rounded-2xl  md:pb-0">
              <div className=" h-12 w-12 md:h-[69] md:w-[69] absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                <img src={MarkImg} alt="Mark Essien" className="w-full h-full" />
              </div>
              <img src={Quotes} alt="" className="pt-[34px] md:pt-12 mx-auto" />
              <p className="text-center text-black opacity-60 text-xs md:text-base italic">
                Voxclips is the ideal app for intriguing my listeners. It has helped me gain more
                views and engagements and I love it
              </p>
              <h4 className="text-center pb-6 text-[11px] md:text-base text-black">Mark Essien</h4>
            </div>
            <div data-aos="flip-left" className=" px-8 bg-white   mx-auto mb-12 md:mb-0 md:px-8 grid items-center relative rounded-lg md:rounded-2xl  md:pb-0">
              <div className=" h-12 w-12 md:h-[69] md:w-[69] absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                <img src={LavyImg} alt="Mark Essien" className="w-full h-full" />
              </div>
              <img src={Quotes} alt="" className="pt-[34px] md:pt-12 mx-auto" />
              <p className="text-center text-black opacity-60 text-xs md:text-base mx-auto mb-2 italic">
                I stumbled on this app by accident and to be honest, this has been the best mistake
                of my life
              </p>
              <h4 className="text-center pb-6 text-[11px] md:text-base text-black">Lavy Engine</h4>
            </div>
            <div data-aos="flip-left" className=" px-8 bg-white   mx-auto mb-12 md:mb-0 md:px-8  grid items-center relative rounded-lg md:rounded-2xl md:pb-0">
              <div className=" h-12 w-12 md:h-[69] md:w-[69] absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                <img src={NonsoImg} alt="Mark Essien" className="w-full h-full" />
              </div>
              <img src={Quotes} alt="" className="pt-[34px] md:pt-12 mx-auto" />
              <p className="text-center text-black opacity-60 text-xs md:text-base italic">
                Simple, Straightforward and works Nahh. To good to be true
              </p>
              <h4 className="text-center pb-6 text-[11px] md:text-base text-black ">Nonso</h4>
            </div>
          </div>
        </div>
      </section>{' '}
      <section className="py-20 bg-white px-8  container mx-auto">
        <div className="flex justify-around items-center">
          <div data-aos="fade-right">
            <h3 className="font-bold md:text-[32px] text-base mb-3 md:mb-8 w-44 md:w-[365px] md:leading-[50px]  text-sec">
              Conveniently download your output on different video qualities
            </h3>
          </div>
          <div data-aos="fade-left">
            <div className="flex justify-between-items-center  md:gap-10 gap-[10px] mb-[10px] md:mb-10 ">
              <div className="bg-[#fbfbfb]  md:gap-10 gap-[10px] rounded p-2.5 md:p-[30px] md:h-32 md:w-32 h-16 w-16">
                <p className="text-black text-[8px] border-[1px] border-black border-solid h-full w-full rounded grid items-center justify-center  md:text-base">
                  1080p
                </p>
              </div>
              <div className="bg-[#fbfbfb] rounded p-2.5 md:p-[30px] md:h-32 md:w-32 h-16 w-16">
                <p className="text-black text-[8px] border-[1px] border-black border-solid h-full w-full rounded grid items-center justify-center md:text-base ">
                  720p
                </p>
              </div>
            </div>
            <div className="flex justify-between-items-center md:gap-10 gap-[10px] ">
              <div className="bg-[#fbfbfb] rounded p-2.5 md:p-[30px] md:h-32 md:w-32 h-16 w-16">
                <p className="text-black text-[8px] border-[1px] border-black border-solid h-full w-full rounded grid items-center justify-center  md:text-base">
                  480p
                </p>
              </div>
              <div className="bg-[#fbfbfb] rounded p-2.5 md:p-[30px] md:h-32 md:w-32 h-16 w-16">
                <p className="text-black text-[8px] border-[1px] border-black border-solid h-full w-full rounded grid items-center justify-center  md:text-base">
                  4k
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Freestyle />
      <Transform />
      <StartCreating />

    </Layout>
  );
};
export default Home;
