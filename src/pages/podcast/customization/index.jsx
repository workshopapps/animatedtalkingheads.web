import React, { useState } from 'react';
import Layout from '../../../components/UI/Layout';
import { Text } from '../../../components/UI/Text';
import caretRight from '../../../assets/icons/carretRight.svg';
import toggle from '../../../assets/icons/toggle.svg';
import { Link } from 'react-router-dom';
// import sceneBg from '../../assets/images/sceneBg.png';
// import speakerOne from '../../assets/images/headOne.png';
// import audioWidget from '../../assets/images/audioWidget.png';
import timestamp from '../../../assets/images/timeStamp.png';
// import speakerTwo from '../../assets/images/headerTwo.png';
import user from '../../../assets/icons/user.svg';
import './customize-audio.scss';
import VideoScene from './components/VideoScene';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
// import { BiEditAlt } from 'react-icons/bi';
// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Button } from '../../../components/UI/Button';
// import ReactAudioPlayer from 'react-audio-player';
import AudioWidget from './components/AudioWidget';

import store from '../../../store/store.js';
// import { setAvatar, setBg } from '../../../store/actions/customizeVideoActions';

const CustomizeAudio = () => {
  const [numberOfSpeakers, setNumbers] = useState(1);
  // const [isPlaying, setIsplaying] = useState(false)

  // const audioElement = new Audio(mp3);

  // function playHandler() {

  //   console.log("isplaying: ", isPlaying);
  //   if (isPlaying) {
  //     audioElement.pause()
  //     setIsplaying(!isPlaying)
  //   } else {
  //     audioElement.play()
  //     setIsplaying(!isPlaying)

  //   }
  // }

  // ./uploads/podcasts/637fe8e8ddc92960e1891345/637fe8e8ddc92960e1891345-1669327081098-kina.mp3

  console.log(store.getState());

  function setAV() {
    console.log('ca;;ing');
    store.dispatch({ type: 'ADD_AVATAR', payload: 'eojifo jpo pf h uiandfiun' });
    // setAvatar('fojofj pgiu isfnvisnfivnuisdfnviusfndbd')
    // setBg('fojofj pgiu isfnvisnfivnuisdfnviusfndbd')
    // console.log(store.getState().customizeVideoReducer);
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

          <div className="customization-center-timestamp w-full my-6 space-y-3">
            {/* <div className="header middle space-x-3">
              <img src={toggle} alt="" />
              <Text w={'md'} type={'text4'} cap className={'text-[#666666]'}>
                Time Stamp (Who is speaking?)
              </Text>
            </div> */}
            {/* 
            <div className="audio_widget_wrapper w-full  border">
              <img src={timestamp} alt="" />
            </div> */}
          </div>
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
