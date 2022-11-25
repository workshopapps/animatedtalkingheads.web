import { Text } from '../../../../components/UI/Text';
// import caretRight from '../../assets/icons/carretRight.svg';
// import toggle from '../../assets/icons/toggle.svg';
// import speakerOne from '../../../../assets/images/headOne.png';
import speakerTwo from '../../../../assets/images/headerTwo.png';
// import audioWidget from '../../assets/images/audioWidget.png';
// import timestamp from '../../assets/images/timeStamp.png';
// import speakerTwo from '../../../assets/avatars/avatars-side/side8.png';
// import user from '../../assets/icons/user.svg';
import '../customize-audio.scss';
import bg1 from '../../../../assets/images/scenery/background1.png';
import bg2 from '../../../../assets/images/scenery/background2.png';
import bg3 from '../../../../assets/images/scenery/background3.png';
import bg4 from '../../../../assets/images/scenery/background4.png';
import bg5 from '../../../../assets/images/scenery/background5.png';
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import CustomiseCharacterModal from './modal';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useState } from 'react';
// import { Button } from '../../components/UI/Button';
import store from '../../../../store/store.js';

const CustomizeAudio = ({ speakets }) => {
  const [currentScene, setCurrentScene] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const sceneAray = [bg1, bg2, bg3, bg4, bg5];
  console.log(sceneAray.length);

  function changeScene(mode) {
    switch (mode) {
      case 'next':
        if (currentScene < sceneAray.length - 1) {
          return setCurrentScene(currentScene + 1);
        } else return;

      case 'prev':
        if (currentScene > 1) {
          return setCurrentScene(currentScene - 1);
        } else return;
    }
  }

  const currentHead = store.getState().customizeVideoReducer.currentAvatar;

  return (
    <div className="scene_wrapper w-full space-y-4 border rounded-xl p-4 md:p-[20px]  md:px-[55px]">
      {showModal && <CustomiseCharacterModal closeModal={() => setShowModal(!showModal)} />}

      {/* action panel */}
      <div className="headers flex  justify-center md:justify-between items-center">
        <div
          role={'button'}
          onClick={() => setShowModal(!showModal)}
          className="video-action-panel   hidden md:flex   md:middle space-x-3">
          <BiEditAlt className={'text-blue-700 text-xl'} />
          <Text w={'md'} type={'text4'} cap className={'text-blue-700'}>
            Customise Character
          </Text>
        </div>

        <div className="text middle space-x-3">
          <Text w={'md'} type={'text4'} cap>
            Background {currentScene + 1}/{sceneAray.length}
          </Text>

          <div className="navigation space-x-2 middle">
            <div
              role={'button'}
              onClick={() => changeScene('prev')}
              className="nav_item border rounded-md p-1 hover:bg-blue-500 hover:text-white">
              <BsChevronLeft className={'text-xl'} />
            </div>
            <div
              role={'button'}
              onClick={() => changeScene('next')}
              className="nav_item border rounded-md p-1 hover:bg-blue-500 hover:text-white">
              <BsChevronRight className={'text-xl'} />
            </div>
          </div>
        </div>
      </div>

      <div className="scene w-full border h-[250px]  md:h-[450px] relative">
        <div
          style={{ backgroundImage: `url(${sceneAray[currentScene]})` }}
          className={`bg-image w-full h-full relative sceneBackground`}>
          <div className="speakers_container   absolute bottom-20 md:bottom-[70px] left-0 mt-6   middle justify-between w-full">
            <div className="speaker_one_head mx-auto w-[120px] md:w-full centered">
              <img src={currentHead} alt="" />
            </div>

            {speakets === 2 && (
              <div className="speaker_two_head w-[120px] md:w-full  centered">
                <img src={speakerTwo} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        role={'button'}
        onClick={() => setShowModal(!showModal)}
        className="video-action-panel justify-center md:hidden  middle space-x-3">
        <BiEditAlt className={'text-blue-700 text-xl'} />
        <Text w={'md'} type={'text4'} cap className={'text-blue-700'}>
          Customise Character
        </Text>
      </div>
    </div>
  );
};

export default CustomizeAudio;
