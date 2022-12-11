import { Text } from '../../../../components/UI/Text';
import SimpleImageSlider from 'react-simple-image-slider';
import { BiEditAlt } from 'react-icons/bi';
import CustomiseCharacterModal from './modal';
import { useState, useEffect } from 'react';
import store from '../../../../store/store.js';
import { scenes } from '../data';
import { SET_CURRENT_BACKGROUND } from '../../../../store/actionsTypes/actionTypes';



const CustomizeAudio = ({ speakers }) => {
  const [currentScene] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const sceneArray = [scenes[0].image, scenes[1].image];

  const currentHead = store.getState().customizeVideoReducer.currentAvatar;

  useEffect(() => {
    store.dispatch({ type: SET_CURRENT_BACKGROUND, payload: scenes[currentScene]});
  }, [currentScene]);


  return (
    <div className="scene_wrapper md:p-[20px]  md:px-[55px]">
      {showModal && <CustomiseCharacterModal speakers={speakers} closeModal={() => setShowModal(!showModal)} />}

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

        {/* <div className="text middle space-x-3">
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
        </div> */}
      </div>

      <div className="scene w-full border h-[250px]  md:h-[450px] relative">
        {/* <div
          style={{ backgroundImage: `url(${sceneAray[currentScene]})` }}
          className={`bg-image w-full h-full relative sceneBackground`}>
       
        </div> */}

        <div
          style={{ backgroundImage: `url(${sceneArray[currentScene]})` }}
          className={`bg-image w-full h-full relative sceneBackground`}>
          <SimpleImageSlider
            width={'100%'}
            height={'100%'}
            images={sceneArray}
            // showBullets={true}
            style={{backgroundPosition: 'center'}}
            onClickBullets={(idx) => console.log(idx)}
            showNavs={true}
            navStyle={2}
            onClickNav={(toRight) => console.log(toRight)}
          />
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
