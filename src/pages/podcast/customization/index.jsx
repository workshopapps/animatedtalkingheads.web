import React, { useState } from 'react';
import Layout from '../../../components/UI/Layout';
import { Text } from '../../../components/UI/Text';
import caretRight from '../../../assets/icons/carretRight.svg';

import { Link } from 'react-router-dom';

import user from '../../../assets/icons/user.svg';
import './customize-audio.scss';
import VideoScene from './components/VideoScene';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { Button } from '../../../components/UI/Button';

import AudioWidget from './components/AudioWidget';

// import store from '../../../store/store.js';
import { setAvatar } from '../../../store/actions/customizeVideoActions';

const CustomizeAudio = () => {
  const [numberOfSpeakers, setNumbers] = useState(1);

  function setAV() {
    console.log('ca;;ing');
    setAvatar('now i am in the store');
  }

  function SpeakersCountHandler(mode) {
    switch (mode) {
      case 'add':
        if (numberOfSpeakers < 2) {
          return setNumbers(2);
        } else return;

      case 'minus':
        if (numberOfSpeakers > 1) {
          return setNumbers(1);
        } else return;
    }
  }

  // render video from api
  // const RenderVideo = async () => {
  //   const videoObject = {
  //     head_file_path: store.getState().customizeVideoReducer.avatarType,
  //     scene_file_path: store.getState().customizeVideoReducer.backgroundType,
  //     id: store.getState().cartReducer.podcast_audio.user_id
  //   };

  //   await fetch('https://api.voxlips.hng.tech/', {
  //     method: 'POST',
  //     mode: 'cors',
  //     body: videoObject
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, 'from video object upload');
  //     })
  //     .catch((err) => {
  //       console.log(err.message, 'error from video object');
  //     });
  // };

  return (
    <Layout>
      <div className={`customize-audio lg:px-20`}>
        <div className="breadcrumbs p-3 space-x-1  w-full flex items-center text-sec-500 capitalize md:space-x-3">
          <Text w={'md'} type={'text4'} cap>
            home
          </Text>
          <div className="icon">
            <img src={caretRight} alt="" />
          </div>
          <Text w={'md'} type={'text4'} cap>
            upload
          </Text>
          <div className="icon">
            <img src={caretRight} alt="" />
          </div>
          <Text w={'md'} type={'text4'} cap className={'text-blue-700'}>
            customize upload
          </Text>
        </div>

        <main className="content w-full md:w-[80%]  mx-auto flex my-11 p-2 flex-col items-center">
          {/* pafe info */}
          <div className="info text-center  w-[350px] space-y-6 md:space-y-11 ">
            <Text w={'md'} type={'header2'} cap>
              Customise Video
            </Text>

            <Text w={'md'} type={'text4'} cap className={'text-sec-400'}>
              How many speakers are in your podcasts
            </Text>

            <div className="speaker-select mx-auto flex justify-center">
              <div className="middle ">
                <div
                  role={'button'}
                  onClick={() => SpeakersCountHandler('minus')}
                  className="p-3 centered">
                  <AiOutlineMinus />
                </div>
                <div
                  onClick={setAV}
                  className="p-3 middle space-x-3  px-6 border rounded-xl centered">
                  {Array(numberOfSpeakers)
                    .fill(1)
                    .map((item, index) => (
                      <div key={index} className="icon">
                        <img src={user} alt="" />
                      </div>
                    ))}
                </div>
                <div
                  role={'button'}
                  onClick={() => SpeakersCountHandler('add')}
                  className="p-3 centered">
                  <AiOutlinePlus className={'text-blue-800'} />
                </div>
              </div>
            </div>
          </div>
          {/* pafe info */}

          <div className="customization-center  my-4 w-full space-y-3">
            <Text w={'md'} type={'text4'} cap className={'text-[#666666] text-center md:text-left'}>
              Video Selection Preview
            </Text>

            <VideoScene speakets={numberOfSpeakers} />
          </div>

          {/* current podcast's audio player widget */}
          <AudioWidget />
          {/* current podcast's audio player widget  end*/}

          <div className="customization-center-timestamp w-full my-6 space-y-3"></div>
        </main>

        <div className="centered w-full my-[5%]">
          <Link to={'/podcast/download'}>
            <Button label={'render video'} />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default CustomizeAudio;
