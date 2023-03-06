import React, { useState } from 'react';
import Layout from '../../../components/UI/Layout';
import caretRight from '../../../assets/icons/carretRight.svg';
import styles from './styles.module.scss';
import user from '../../../assets/icons/user.svg';
import './customize-audio.scss';
import VideoScene from './components/VideoScene';
import AudioWidget from './components/AudioWidget';
import store from '../../../store/store.js';
import axios from 'axios';
import AuthWrapper from '../../../components/UI/Auth/AuthWrapper';
import PropagateLoader from 'react-spinners/PropagateLoader';
import BarLoader from 'react-spinners/BarLoader';
import { useQuery } from 'react-query';
import { Text } from '../../../components/UI/Text';
import { Modal } from '../../../components/UI/Modal/Modal';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Button } from '../../../components/UI/Button';
import { setAvatar } from '../../../store/actions/customizeVideoActions';
import { formatId } from './data';
import markIcon from '../../../assets/icons/mark-icon.png';
import { MdCancel } from 'react-icons/md';
import { GiCancel } from 'react-icons/gi';

const CustomizeAudio = () => {
  const [numberOfSpeakers, setNumbers] = useState(1);
  const [modalOpen, setModalOpen] = useState();
  const [render, setRender] = useState();
  const [success, setSuccess] = useState();
  const [pollInterval, setPollingInterval] = useState(false);
  const [podcastVideoId, setPodcastVideoId] = useState('');

  const navigate = useNavigate();

  const currentAvatar = store.getState().customizeVideoReducer.currentAvatar;
  const currentBackground = store.getState().customizeVideoReducer.currentBackground;

  const showModal = () => {
    setModalOpen(true);
  };

  const hideModal = () => {
    setModalOpen(false);
  };

  function setAV() {
    console.log('ca;;ing');
    setAvatar('now i am in the store');
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

  const bearerToken = localStorage.getItem('token');
  const podcast_id = store.getState().cartReducer.podcast_audio._id;

  const postData = () => {
    const base_url = 'https://api.voxclips.hng.tech/api/v1/podcasts/';
    const url = `${base_url}${podcast_id}/generate-video`;

    const headers = { Authorization: `Bearer ${bearerToken}` };

    const data = {
      bg_path: currentBackground.id,
      avatar_map: {
        A: formatId(currentAvatar[0].id, 0),
        B: numberOfSpeakers > 1 ? formatId(currentAvatar[1].id, 1) : undefined,
        C: numberOfSpeakers > 2 ? formatId(currentAvatar[2].id, 2) : undefined
      }
    };
    console.log(data);
    return axios.post(url, data, { headers: headers });
  };

  const { refetch } = useQuery(['render-video'], postData, {
    enabled: false,
    onSuccess: (response) => {
      setPodcastVideoId(response.data._id);
      setPollingInterval(10000);
    }
  });

  const handleRender = async () => {
    try {
      refetch();
      setRender(true);
    } catch (err) {
      console.log({ err });
    }
  };

  const getStatus = () => {
    const url = `https://api.voxclips.hng.tech/api/v1/animated-videos/${podcastVideoId}`;
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${bearerToken}`
      }
    });
  };

  const onPollingRequestSuccess = (response) => {
    const ERROR = 'ERROR';
    const COMPLETED = 'COMPLETED';

    if (response?.data?.status === ERROR) {
      setPollingInterval(false);
      setSuccess(false);
      setModalOpen(true);
    }

    if (response?.data?.status === COMPLETED) {
      store.dispatch({ type: 'ADD_PODCAST_VIDEO', payload: response.data });
      setPollingInterval(false);
      setSuccess(true);
      setModalOpen(true);
    }
  };

  useQuery(['get-podcast-status'], getStatus, {
    refetchInterval: pollInterval,
    onSuccess: onPollingRequestSuccess
  });
  const handleClose = () => {
    navigate('/');
  };
  const handleCancel = () => {
    setPollingInterval(false);
    navigate('/uploads');
  };
  return (
    <Layout>
      <AuthWrapper>
        {/* breadcrumbs */}
        {/* <div className="breadcrumbs p-3 space-x-1  w-full flex items-center text-sec-500 capitalize md:space-x-3">
          <Text w={'md'} type={'text4'} cap>
            <Link to="/">Home</Link>
          </Text>

          <div className="icon">
            <img src={caretRight} alt="" />
          </div>
          <Text w={'md'} type={'text4'} cap>
            <Link to="/podcast/upload">Upload</Link>
          </Text>
          <div className="icon">
            <img src={caretRight} alt="" />
          </div>
          <Text w={'md'} type={'text4'} cap className={'text-blue-700'}>
            <Link to="/podcast/customize">customize Upload</Link>
          </Text>
        </div> */}
        <div className=" first-letter:py-[50px] px-[10px] text-center justify-center ">
          <div className="flex flex-col lg:flex-row-reverse lg:w-[100%] ">
            {render ? (
              <div className=" flex flex-col  mt-[40px] lg:mt-[60px] gap-10 lg:w-[40%]">
                <div className="flex flex-col justify-center gap-5">
                  <div>
                    <Text w={'md'} type={'header2'} cap>
                      Rendering...
                    </Text>
                  </div>
                  <div className="text-center flex justify-center ">
                    <Text
                      w={'md'}
                      type={'text4'}
                      className={
                        'text-sec-400 w-[70%] lg:w-[70%] xl:w-[60%] 2xl:w-[60%] max-w-[350px]  text-center md:text-left'
                      }>
                      Your video is rendering. You may go get some tea while at it. You would be
                      notified when it's complete.
                    </Text>
                  </div>
                </div>

                <div className=" text-center flex justify-center">
                  <BarLoader color="#27AE60" width={300} height={10} />
                </div>
                <div className=" flex gap-6 justify-center">
                  <button
                    className=" border-2 py-2 px-6 rounded-[10px] text-[#2563eb] border-[#2563eb] text-[16px] cursor-pointer hover:bg-gray-100"
                    onClick={handleCancel}>
                    Cancel{' '}
                  </button>
                  <Button>Go to Dashboard</Button>
                </div>
              </div>
            ) : (
              <div className="info text-center  space-y-6 md:space-y-11  lg:mt-[50px] lg:w-[40%]">
                <Text w={'md'} type={'header2'} cap>
                  Customise Video
                </Text>

                <Text w={'md'} type={'text4'} className={'text-sec-400'}>
                  How many speakers are in your podcasts?
                </Text>

                <div className="speaker-select mx-auto flex justify-center ">
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
                {render ? (
                  <div>
                    <button
                      className=" border-2 py-2 px-6 rounded-[10px] text-[#2563eb] border-[#2563eb] text-[16px] cursor-pointer  hover:bg-gray-100"
                      onClick={handleCancel}>
                      Cancel{' '}
                    </button>
                  </div>
                ) : (
                  <div className="hidden lg:flex justify-center text-center w-full my-[5%] lg:pt-[200px]">
                    <Button label={'render video'} onClick={handleRender}>
                      Render video
                    </Button>
                  </div>
                )}
              </div>
            )}

            <div className={`customize-audio lg:px-0   lg:w-[60%] lg:ml-[65px]`}>
              <main className="content w-full flex my-7 p-2 flex-col items-center">
                {/* <div className="absolute  w-[600px] h-[500px] bg-gray-400"></div> */}
                <div className="customization-center  my-4 w-full space-y-3 rounded-lg ">
                  {/* <Text w={'md'} type={'text4'} cap className={'text-[#666666] text-center md:text-left'}>
                    Video Selection Preview
                      </Text> */}

                  <VideoScene speakers={numberOfSpeakers} />
                </div>
                {render ? <div className=" bg-black absolute w-22"> </div> : <div></div>}
                {render ? <div></div> : <AudioWidget />}

                {render ? (
                  <div></div>
                ) : (
                  <div className="centered w-full my-[5%] lg:hidden">
                    <Button label={'render video'} onClick={handleRender}>
                      Render video
                    </Button>
                  </div>
                )}
              </main>

              {/* {error && <p className="text-red-600 text-center">{error}</p>} */}
            </div>
          </div>
        </div>

        {modalOpen && (
          <Modal onClose={hideModal}>
            {success ? (
              <>
                <div className="flex justify-center">
                  <img src={markIcon} className=" w-[70px] md:w-[90px] lg:w-[120px]" />
                </div>
                <div className=" flex flex-col text-center justify-center gap-6  bg-[#F8F8F8] ">
                  <MdCancel
                    size={30}
                    onClick={handleClose}
                    className="absolute text-[#72a2f4] right-1 top-0 cursor-pointer hover:text-[#2563eb]"
                  />

                  <div className="flex flex-col justify-center gap-6">
                    <div>
                      {' '}
                      <h1 className=" text-[16px] lg:text-[20px] font-bold">
                        Your video has rendered successfully
                      </h1>
                    </div>
                    <div>
                      {' '}
                      <p>
                        Your video is ready for download. You can also check your videos in your
                        dashboard
                      </p>
                    </div>
                    <div className=" flex flex-col gap-6 ">
                      <div>
                        <Button onClick={() => navigate('/podcast/download')}>
                          Download Video
                        </Button>
                      </div>
                      <div>
                        <button
                          className="border-2 py-2 px-5 rounded-[10px] text-[#2563eb] border-[#2563eb] text-[16px] cursor-pointer  hover:bg-gray-100 "
                          onClick={() => navigate('/podcast/animated-podcast')}>
                          Check my Dashboard{' '}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className=" flex flex-col text-center justify-center gap-6  bg-[#F8F8F8] ">
                  <div className="flex justify-center">
                    <GiCancel className=" text-[red] lg:text-[60px] md:text-[50px] text-[40px]" />
                  </div>
                  {/* <MdCancel
                      size={30}
                      onClick={handleClose}
                      className="absolute text-[#72a2f4] right-1 top-0 cursor-pointer hover:text-[#2563eb]"
                    /> */}

                  <div className="flex flex-col justify-center gap-6">
                    <div>
                      {' '}
                      <h1 className=" text-[16px] lg:text-[20px] font-semibold">
                        Ooops...we couldn't render your video. Please try again
                      </h1>
                    </div>
                    <div className=" flex flex-col gap-6 ">
                      <div>
                        <Button onClick={() => navigate('/uploads')}>Try Again</Button>
                      </div>
                      <div>
                        <button
                          className="border-2 py-2 px-5 rounded-[10px] text-[#2563eb] border-[#2563eb] text-[16px] cursor-pointer  hover:bg-gray-100 "
                          onClick={() => navigate('/dashboard')}>
                          Check my Dashboard{' '}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </Modal>
        )}
      </AuthWrapper>
    </Layout>
  );
};

export default CustomizeAudio;
