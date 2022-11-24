import '../customize-audio.scss';
// import bg1 from '../../../assets/images/scenery/background1.png';
// import bg2 from '../../../assets/images/scenery/background2.png';
import face from '../../../../assets/icons/customize-audio/Face.svg';
// import tone from '../../../../assets/icons/customize-audio/tone.svg';
// import hair from '../../../../assets/icons/customize-audio/Hair.svg';
import ran from '../../../../assets/icons/customize-audio/repeat.svg';
import rotate from '../../../../assets/icons/customize-audio/rotate-left.svg';
import head from '../../../../assets/avatars/avatars-front/Avatars-03.png';
import headWhite from '../../../../assets/avatars/avatars-front/Avatars-02.png';
import head4 from '../../../../assets/avatars/avatars-front/Avatars-04.png';
import head5 from '../../../../assets/avatars/avatars-front/Avatars-05.png';
import close from '../../../../assets/icons/close-circle.svg';
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import store from '../../../../store/store.js';

import { useState } from 'react';
// import { Text } from '../../../components/UI/Text';
import { Button } from '../../../../components/UI/Button';
import { useNavigate } from 'react-router-dom';

const CustomiseCharacterModal = ({ closeModal }) => {
  // const [currentScene, setCurrentScene] = useState(0)

  // console.log(sceneAray.length);

  // function changeScene(mode) {
  //     // select a random scene from scene array
  //     switch (mode) {
  //         case 'next':
  //             if (currentScene < sceneAray.length - 1) {
  //                 return setCurrentScene(currentScene + 1)
  //             } else return

  //         case 'prev':
  //             if (currentScene > 1) {
  //                 return setCurrentScene(currentScene - 1)
  //             } else return
  //     }

  // }

  return (
    <div className="modal_layer centered p-4">
      {/*  */}
      <div className="card_white w-full md:w-[60%] h-auto relative bg-white rounded-xl slide-up p-4 pt-14 md:p-11">
        <button onClick={closeModal} className="icon absolute top-3 right-3">
          <img src={close} alt="" width={'38px'} height={'38px'} />
        </button>

        <div className="overflow-y-scroll  h-[450px]">
          <HeadCustomCenter closeModal={closeModal} currentSpeaker={1} />
          {/* <HeadCustomCenter currentSpeaker={2} /> */}
        </div>
      </div>
    </div>
  );
};

function HeadCustomCenter({ currentSpeaker, closeModal }) {
  const [headd, setHead] = useState(head);
  const navigate = useNavigate();

  //   const currentHead = store.getState().customizeVideoReducer.currentAvatar;

  function setCurrentHead(head) {
    store.dispatch({ type: 'SET_CURRENT_AVATAR', payload: head });
    setHead(head);
  }

  const headArray = [
    head,
    headWhite,
    head4,
    head5,
    head,
    headWhite,
    head4,
    head5,
    head,
    headWhite,
    head4,
    head5,
    head,
    headWhite,
    head4,
    head5
  ];

  return (
    <div className="head-customization-center  w-full p-4 flex flex-col md:flex-row">
      <div className="head_section text-center p-6  md:w-[40%] border flex  flex-col justify-between">
        <div className="dropdown_box flex justify-end">
          <div role={'button'} onClick={() => navigate('/avatars')} className="middle space-x-2">
            <h1 className={'text-blue-500 text-sm'}>View all characters</h1>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.4303 7.83203L11.7253 13.537C11.0516 14.2108 9.94906 14.2108 9.27531 13.537L3.57031 7.83203"
                stroke="#2563EB"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="image  centered ">
          <img src={headd} alt="" />
        </div>

        <h1 className="">speaker {currentSpeaker}</h1>
      </div>

      <div className="customize_section p-6 w-full  md:w-[80%] border space-y-6">
        <div className="tools centered">
          <div className="border rounded-xl h-[80px] middle ">
            <div className="tab hover:bg-blue-500 hover:text-white bg-blue-500  ">
              <img src={face} alt="" />
              <h1 className="text text-white">face</h1>
            </div>
          </div>
        </div>

        <div className="md:w-[350px] p-3  overflow-x-scroll mx-auto">
          <div className="heads flex w-[999px]">
            {headArray.map((item, index) => (
              <button
                onClick={() => setCurrentHead(item)}
                key={index}
                className="heades border border-transparent  hover:border-blue-500">
                <img src={item} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className="action centered">
          <div className=" space-x-6 middle">
            <div className="random middle space-x-2">
              <img src={ran} alt="" />
              <h1 className="font-semibold text-blue-500">Random</h1>
            </div>

            <div className="reset middle space-x-2">
              <img src={rotate} alt="" />
              <h1 className="font-semibold text-blue-500">Reset</h1>
            </div>
          </div>
        </div>

        <div className="button centered">
          <Button onClick={closeModal} label={'done'} />
        </div>
      </div>
    </div>
  );
}

export default CustomiseCharacterModal;
