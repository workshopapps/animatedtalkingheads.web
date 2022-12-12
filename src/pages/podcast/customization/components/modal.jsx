import ran from '../../../../assets/icons/customize-audio/repeat.svg';
import rotate from '../../../../assets/icons/customize-audio/rotate-left.svg';
import close from '../../../../assets/icons/close-circle.svg';
import store from '../../../../store/store.js';
import { useState } from 'react';
import { Button } from '../../../../components/UI/Button';
import AVATAR_SET_1 from '../../../avatar/avatar.data.set-1.js';
import AVATAR_SET_2 from '../../../avatar/avatar.data.set-2.js';
import AVATAR_SET_3 from '../../../avatar/avatar.data.set-3.js';


const CustomiseCharacterModal = ({ closeModal, speakers }) => {


  return (
    <div className="modal_layer centered p-4">
      {/*  */}
      <div className="card_white w-full md:w-[80%] h-auto relative bg-white rounded-xl slide-up p-4 pt-14 md:p-11">
        
        <button onClick={closeModal} className="icon absolute top-3 right-3">
          <img src={close} alt="" width={'38px'} height={'38px'} />
        </button>

        <div className="overflow-none h-[90%]">
          <HeadCustomCenter closeModal={closeModal} speakers={speakers}  />
          {/* <HeadCustomCenter currentSpeaker={2} /> */}
        </div>
      
      </div>
    
    </div>
  );
};

function HeadCustomCenter({ closeModal, speakers }) {

  const currentHeads = store.getState().customizeVideoReducer.currentAvatar;
  
  const [currentSpeaker, setCurrentSpeaker] = useState(0);
  const [head, setHead] = useState(currentHeads[currentSpeaker]);


  function setCurrentHeads() {
    const newHead = [...currentHeads]
    newHead[currentSpeaker] = head
    store.dispatch({ type: 'SET_CURRENT_AVATAR', payload: newHead });
    setHead(head);
    closeModal()
  }

  function selectSpeaker () {
    setCurrentSpeaker(currentSpeaker === 0 ? 1 : 0)
    setHead(currentHeads[currentSpeaker === 0 ? 1 : 0])
  }


  return (
    <div className="head-customization-center  w-full p-4 flex flex-col md:flex-row overscroll-none">
      <div className="head_section text-center p-6  md:w-[40%] border flex  flex-col justify-between">
        <div className="dropdown_box flex justify-end">
          {/* <div role={'button'} onClick={() => navigate('/avatars')} className="middle space-x-2">
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
          </div> */}
        </div>

        <div className="image  centered ">
          <img src={head} alt="" />
        </div>

        <h1 className="">speaker {currentSpeaker + 1}</h1>
        { speakers > 1 && <Button onClick={selectSpeaker}>Change Speaker</Button> }
      </div>

      <div className="customize_section p-6 w-full  md:w-[80%] border space-y-6">
        
        {/* <div className="tools centered">
          <div className="border rounded-xl h-[80px] middle ">
            <div className="tab hover:bg-blue-500 hover:text-white bg-blue-500  ">
              <img src={face} alt="" />
              <h1 className="text text-white">face</h1>
            </div>
          </div>
        </div> */}

        <div className="md:w-full p-3 mx-auto">
          <div className="heads overflow-y-auto h-[300px]">
            {[...AVATAR_SET_1, ...AVATAR_SET_2, ...AVATAR_SET_3].map((item, index) => (
              <button
                onClick={() => setHead(item.image)}
                key={index}
                className="inline heades border border-transparent  hover:border-blue-500">
                <img className='inline w-20' src={item.image} alt="" width={"100px"} height={"100px"} />
              </button>
            ))}
          </div>
        </div>

        <div className="action centered">
          <div className=" space-x-6 middle">
            <div className="random middle space-x-2 cursor-pointer">
              <img src={ran} alt="" />
              <h1 className="font-semibold text-blue-500">Random</h1>
            </div>

            <div className="reset middle space-x-2 cursor-pointer">
              <img src={rotate} alt="" />
              <h1 className="font-semibold text-blue-500">Reset</h1>
            </div>
          </div>
        </div>
        <div className="button centered">
          <Button onClick={setCurrentHeads}> Done  </Button>
        </div>
      </div>
    </div>
  );
}

export default CustomiseCharacterModal;
