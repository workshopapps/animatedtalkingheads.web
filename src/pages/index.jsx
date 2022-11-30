import Layout from '../components/UI/Layout';
// import ChatIcon from '../assets/icons/chat-icon.svg';
import './styles/index.css';
// import { Button } from '../components/UI/Button';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import Lottie from 'lottie-react';
import heroAnimation from '../assets/animations/VoxClipHeroLottie.json';

// import ChatBox from '../components/ChatBox';

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
        <div className="home">
          <div className="hero-container">
            <div className="desktop-lhs">
              <div className="hero-text">
                <h1 className="hero-heading">Heads that talk, On your podcast.</h1>
                <p className="hero-par">
                  Turn audio podcasts into a video with our various characters customizable to your
                  liking.
                </p>
              </div>
              <div className="hero-btns ">
                <Link style={{ color: 'white' }} to="/podcast/upload">
                  <button className="btn">
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
                </Link>
                <div className="watch-btn">
                  <button className="btn">
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
                  </button>
                  <h4>How it works</h4>
                </div>
              </Link>
              </div>
            </div>
            <div className="desktop-rhs">
              <div className="lottie">
                <Lottie loop={true} animationData={heroAnimation} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Home;
