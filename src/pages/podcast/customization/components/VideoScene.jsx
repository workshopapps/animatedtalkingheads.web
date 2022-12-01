import { Text } from '../../../../components/UI/Text';

// import speakerTwo from '../../../../assets/images/headerTwo.png';

import bg1 from '../../../../assets/images/scenery/background1.png';
import bg2 from '../../../../assets/images/scenery/background2.png';
import bg3 from '../../../../assets/images/scenery/background3.png';
import bg4 from '../../../../assets/images/scenery/background4.png';
import bg5 from '../../../../assets/images/scenery/background5.png';
import SimpleImageSlider from 'react-simple-image-slider';
import { BiEditAlt } from 'react-icons/bi';
import CustomiseCharacterModal from './modal';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useState } from 'react';

import store from '../../../../store/store.js';
// import { setAvatar, setBackgound } from '../../../../store/actions/customizeVideoActions';

const CustomizeAudio = ({ speakets }) => {
  const [currentScene, setCurrentScene] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const sceneAray = [bg1, bg2, bg3, bg4, bg5];
  console.log(sceneAray.length);

  function changeScene(mode) {
    switch (mode) {
      case 'next':
        if (currentScene < sceneAray.length - 1) {
          // setBackgound()
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
    <div className="scene_wrapper md:p-[20px]  md:px-[55px]">
      {showModal && <CustomiseCharacterModal closeModal={() => setShowModal(!showModal)} />}

      {/* action panel */}
      <div className="headers">
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
        {/* <div
          style={{ backgroundImage: `url(${sceneAray[currentScene]})` }}
          className={`bg-image w-full h-full relative sceneBackground`}>
       
        </div> */}

        <div
          style={{ backgroundImage: `url(${sceneAray[currentScene]})` }}
          className={`bg-image w-full h-full relative sceneBackground`}>
          <SimpleImageSlider
            width={'100%'}
            height={'100%'}
            images={sceneAray}
            showBullets={true}
            style={{
              backgroundPosition: 'center',
              border: '1px solid red'
            }}
            onClickBullets={(idx) => console.log(idx)}
            // showNavs={true}
            navStyle={2}
            onClickNav={(toRight) => console.log(toRight)}
          />
          <div className="speakers_container   absolute bottom-20 md:bottom-[70px] left-0 mt-6   middle justify-between w-full">
            <div className="speaker_one_head mx-auto w-[180px] md:w-full centered">
              <img src={currentHead} alt="" width={'150px'} height={'150px'} />
            </div>

            {speakets === 2 && (
              <div className="speaker_two_head w-[180px] md:w-full  centered">
                <img src={currentHead} alt="" width={'150px'} height={'150px'} />
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
