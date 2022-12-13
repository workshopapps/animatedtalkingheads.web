import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { useEffect } from 'react';
//import  { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { Text } from '../../../../components/UI/Text';
import { BiEditAlt } from 'react-icons/bi';
import CustomiseCharacterModal from './modal';
import { useState } from 'react';
import store from '../../../../store/store.js';
import { scenes } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import { SET_CURRENT_BACKGROUND } from '../../../../store/actionsTypes/actionTypes';

// function slideRenderer(params) {
//   const { index, key } = params;

function slideRenderer(params) {
  const { index, key } = params;

  switch (mod(index, 2)) {
    case 0:
      return (
        <div key={key}>
          <img className="object-cover h-[250px]  md:h-[450px] w-full" src={scenes[0].image} />
        </div>
      );

    case 1:
      return (
        <div key={key}>
          <img className="object-cover h-[250px]  md:h-[450px] w-full" src={scenes[1].image} />
        </div>
      );

    default:
      return null;
  }
}

const CustomizeAudio = ({ speakers }) => {
  const [currentScene, setCurrentScene] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const currentHead = store.getState().customizeVideoReducer.currentAvatar;

  useEffect(() => {
    const index = mod(currentScene - 1, 2);
    store.dispatch({ type: SET_CURRENT_BACKGROUND, payload: scenes[index] });
  }, [currentScene]);

  return (
    <div className="scene_wrapper md:p-[20px]  md:px-[55px]">
      {showModal && (
        <CustomiseCharacterModal speakers={speakers} closeModal={() => setShowModal(!showModal)} />
      )}

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
            Background {mod(currentScene, sceneArray.length) + 1} / {sceneArray.length}
          </Text>{' '}
          */}
          <div className="navigation space-x-2 middle">
            <div
              role={'button'}
              onClick={() => setCurrentScene(currentScene - 1)}
              className="nav_item border rounded-md p-1 hover:bg-blue-500 hover:text-white">
              <BsChevronLeft className={'text-xl'} />
            </div>
            <div
              role={'button'}
              onClick={() => setCurrentScene(currentScene + 1)}
              className="nav_item border rounded-md p-1 hover:bg-blue-500 hover:text-white">
              <BsChevronRight className={'text-xl'} />
            </div>
          </div>
        </div>{' '}
        */}
      </div>

      <div className="scene w-full border h-[250px]  md:h-[450px] relative">
        <div className={`bg-image w-full h-full`}>
          <VirtualizeSwipeableViews index={currentScene} slideRenderer={slideRenderer} />
          <div className="speakers_container   absolute bottom-20 md:bottom-[70px] left-0 mt-6   middle justify-between w-full">
            <div className="speaker_one_head mx-auto w-[180px] md:w-full centered">
              <img src={currentHead[0].image} alt="" width={'150px'} height={'150px'} />
            </div>

            {speakers === 2 && (
              <div className="speaker_two_head w-[180px] md:w-full  centered">
                <img src={currentHead[1].image} alt="" width={'150px'} height={'150px'} />
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
