
import '../customize-audio.scss';
// import bg1 from '../../../assets/images/scenery/background1.png';
// import bg2 from '../../../assets/images/scenery/background2.png';
import face from '../../../assets/icons/customize-audio/Face.svg';
import tone from '../../../assets/icons/customize-audio/tone.svg';
import hair from '../../../assets/icons/customize-audio/Hair.svg';
import ran from '../../../assets/icons/customize-audio/repeat.svg';
import rotate from '../../../assets/icons/customize-audio/rotate-left.svg';
import head from '../../../assets/avatars/avatars-front/Avatars-03.png';
import close from '../../../assets/icons/close-circle.svg';
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

// import { useState } from 'react';
// import { Text } from '../../../components/UI/Text';
import { Button } from '../../../components/UI/Button';




const CustomiseCharacterModal = ({ closeModal }) => {
    // const [currentScene, setCurrentScene] = useState(0)


    // const sceneAray = [bg1, bg2, bg3, bg4, bg5]
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
        <div className="modal_layer centered">
            <div className="card_white md:w-[60%] h-auto relative bg-white rounded-xl p-11">
                <button onClick={closeModal} className="icon absolute top-1 right-1">
                    <img src={close} alt="" width={'38px'} height={'38px'} />

                </button>

                <div className="character_bar  w-full p-4 flex">
                    <div className="head_section text-center p-6  w-[40%] border flex  flex-col justify-between">

                        <div className="dropdown_box flex justify-end">
                            <div role={'button'} className="middle space-x-2">
                                <h1 className={'text-blue-500 text-sm'} >View all characters</h1>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.4303 7.83203L11.7253 13.537C11.0516 14.2108 9.94906 14.2108 9.27531 13.537L3.57031 7.83203" stroke="#2563EB" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </div>
                        </div>

                        <div className="image  centered ">
                            <img src={head} alt="" />
                        </div>

                        <h1 className=''>speaker 1</h1>
                    </div>

                    <div className="customize_section p-6 w-[80%] border space-y-6">
                        <div className="tools centered">
                            <div className="border rounded-xl h-[80px] middle ">
                                <div className="tab hover:bg-blue-500 hover:text-white bg-blue-500  ">
                                    <img src={face} alt="" />
                                    <h1 className="text text-white">face</h1>
                                </div>
                                <div className="tab hover:bg-blue-500 hover:text-white rounded-xl p-2 bg-white h-full">
                                    <img src={tone} alt="" />
                                    <h1 className="text">skin tone</h1>
                                </div>
                                <div className="tab hover:bg-blue-500 hover:text-white rounded-xl p-2 bg-white h-full">
                                    <img src={hair} alt="" />
                                    <h1 className="text ">hair</h1>
                                </div>
                            </div>
                        </div>
                        <div className="heads flex ">
                            {
                                Array(4).fill(1).map((item, index) => (
                                    <div key={index} className="heades">
                                        <img src={head} alt="" width={'120px'} height={'120px'} />
                                    </div>
                                ))
                            }
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
                            <Button>
                                done
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CustomiseCharacterModal;
