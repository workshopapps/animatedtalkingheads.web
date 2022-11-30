import Layout from '../components/UI/Layout';
// import ChatIcon from '../assets/icons/chat-icon.svg';
import './styles/index.css';
// import { Button } from '../components/UI/Button';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import Lottie from 'lottie-react';
import { Button } from '../components/UI/Button';
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
              <div className="hero-btns">
                <Link to="/podcast/upload">
                  <Button label={'Upload audio'}>Upload audio</Button>
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
