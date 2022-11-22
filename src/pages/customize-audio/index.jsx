import React, { useState } from 'react';
import Layout from '../../components/UI/Layout';
import { Text } from '../../components/UI/Text';
import caretRight from '../../assets/icons/carretRight.svg';
import toggle from '../../assets/icons/toggle.svg';
// import sceneBg from '../../assets/images/sceneBg.png';
// import speakerOne from '../../assets/images/headOne.png';
import audioWidget from '../../assets/images/audioWidget.png';
import timestamp from '../../assets/images/timeStamp.png';
// import speakerTwo from '../../assets/images/headerTwo.png';
import user from '../../assets/icons/user.svg';
import './customize-audio.scss';
import VideoScene from './components/VideoScene'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
// import { BiEditAlt } from 'react-icons/bi';
// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Button } from '../../components/UI/Button';
// import mp3 from '../../assets/audios/audio.mp3'








const CustomizeAudio = () => {
  const [numberOfSpeakers, setNumbers] = useState(1)

  // const audioElement = new Audio(mp3);

  function SpeakersCountHandler(mode) {
    switch (mode) {
      case 'add':
        if (numberOfSpeakers < 2) {
          return setNumbers(2)
        } else return


      case 'minus':
        if (numberOfSpeakers > 1) {
          return setNumbers(1)
        } else return
    }

  }




  return (
    <Layout>
      <div className={`customize-audio lg:px-20`}>
        <div className="breadcrumbs p-3  w-full flex items-center text-sec-500 capitalize space-x-3">
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

        <main className="content w-[80%]  mx-auto flex my-11  flex-col items-center">
          <div className="info text-center  w-[350px] space-y-11">
            <Text w={'md'} type={'header2'} cap>
              Customise Video
            </Text>

            <Text w={'md'} type={'text4'} cap className={'text-sec-400'}>
              How many speakers are in your podcasts
            </Text>

            <div className="character-select mx-auto flex justify-center ">
              <div className="middle ">
                <div role={'button'} onClick={() => SpeakersCountHandler('minus')} className="p-3 centered">
                  <AiOutlineMinus />
                </div>
                <div className="p-3 middle space-x-3  px-6 border rounded-xl centered">

                  {
                    Array(numberOfSpeakers).fill(1).map((item, index) => (
                      <div key={index} className="icon">
                        <img src={user} alt="" />
                      </div>
                    ))
                  }

                </div>
                <div role={'button'} onClick={() => SpeakersCountHandler('add')} className="p-3 centered">
                  <AiOutlinePlus className={'text-blue-800'} />
                </div>
              </div>
            </div>
          </div>

          <div className="customization-center w-full space-y-3">
            <Text w={'md'} type={'text4'} cap className={'text-[#666666]'}>
              Video Selection Preview
            </Text>

            <VideoScene speakets={numberOfSpeakers} />
          </div>


          {/* current podcast's audio player widget */}
          <div className="customization-center-audio w-full my-6 space-y-3">
            <Text w={'md'} type={'text4'} cap className={'text-[#666666]'}>
              Audio Podcast.mp3
            </Text>

            <div className="audio_widget_wrapper w-full h-10  bg-green-300  border">
              <img src={audioWidget} alt="" />
              {/* <div className="button flex">
                </div> */}
              {/* <Button label={'play'} onClick={() => audioElement.play()} />
                <Button label={'stop'} onClick={() => audioElement.pause()} /> */}

            </div>
          </div>
          {/* current podcast's audio player widget  end*/}


          <div className="customization-center-timestamp w-full my-6 space-y-3">
            <div className="header middle space-x-3">
              <img src={toggle} alt="" />
              <Text w={'md'} type={'text4'} cap className={'text-[#666666]'}>
                Time Stamp (Who is speaking?)
              </Text>
            </div>

            <div className="audio_widget_wrapper w-full  border">
              <img src={timestamp} alt="" />
            </div>
          </div>
        </main>

        <div className="centered w-full my-[5%]">
          <Button label={'render video'} />
        </div>
      </div>
    </Layout>
  );
};

export default CustomizeAudio;
