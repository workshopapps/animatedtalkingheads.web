import Layout from '../../components/UI/Layout';
import { Text } from '../../components/UI/Text';
import caretRight from '../../assets/icons/carretRight.svg';
import toggle from '../../assets/icons/toggle.svg';
import sceneBg from '../../assets/images/sceneBg.png';
import speakerOne from '../../assets/images/headOne.png';
import audioWidget from '../../assets/images/audioWidget.png';
import timestamp from '../../assets/images/timeStamp.png';
import speakerTwo from '../../assets/images/headerTwo.png';
import user from '../../assets/icons/user.svg';
import styles from './styles.module.scss';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Button } from '../../components/UI/Button';
const CustomizeAudio = () => {
  return (
    <Layout>
      <div className={`${styles.customize} lg:px-20`}>
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
                <div className="p-3 centered">
                  <AiOutlineMinus />
                </div>
                <div className="p-3 middle space-x-3  px-6 border rounded-xl centered">
                  <div className="icon">
                    <img src={user} alt="" />
                  </div>

                  <div className="icon">
                    <img src={user} alt="" />
                  </div>
                </div>
                <div className="p-3 centered">
                  <AiOutlinePlus className={'text-blue-800'} />
                </div>
              </div>
            </div>
          </div>

          <div className="customization-center w-full">
            <Text w={'md'} type={'text4'} cap>
              Video Selection Preview
            </Text>

            <div className="scene_wrapper w-full space-y-4 border rounded-xl p-[20px]  px-[55px]">
              <div className="headers flex justify-between items-center">
                <div className="text middle space-x-3">
                  <BiEditAlt className={'text-blue-700'} />
                  <Text w={'md'} type={'text4'} cap className={'text-blue-700'}>
                    Customise Character
                  </Text>
                </div>

                <div className="text middle space-x-3">
                  <Text w={'md'} type={'text4'} cap>
                    Background 1/65
                  </Text>

                  <div className="navigation space-x-2 middle">
                    <div className="nav_item border rounded-md p-1 hover:bg-blue-500 hover:text-white">
                      <BsChevronLeft className={'text-xl'} />
                    </div>
                    <div className="nav_item border rounded-md p-1 hover:bg-blue-500 hover:text-white">
                      <BsChevronRight className={'text-xl'} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="scene w-full border    h-[450px] relative">
                <div
                  style={{ backgroundImage: `url(${sceneBg})` }}
                  className={`bg-image w-full h-full relative ${styles.sceneBackground}`}>
                  <div className="speakers_container absolute bottom-11 left-0 mt-6   middle justify-between w-full">
                    <div className="speaker_one_head">
                      <img src={speakerOne} alt="" />
                    </div>

                    <div className="speaker_two_head">
                      <img src={speakerTwo} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="customization-center-audio w-full my-6 space-y-3">
            <Text w={'md'} type={'text4'} cap className={'text-[#666666]'}>
              Audio Podcast.mp3
            </Text>

            <div className="audio_widget_wrapper w-full  border">
              <img src={audioWidget} alt="" />
            </div>
          </div>

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
