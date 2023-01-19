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
import { useQuery } from 'react-query';
import { Text } from '../../../components/UI/Text';
import { Modal } from '../../../components/UI/Modal/Modal';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Button } from '../../../components/UI/Button';
import { setAvatar } from '../../../store/actions/customizeVideoActions';
import { formatId } from './data';

const CustomizeAudio = () => {
  const [numberOfSpeakers, setNumbers] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [error] = useState(false);
  const [status, setStatus] = useState('');
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

  const handleClick = async () => {
    try {
      refetch();
      showModal();
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
      setStatus('ERROR');
    }

    if (response?.data?.status === COMPLETED) {
      store.dispatch({ type: 'ADD_PODCAST_VIDEO', payload: response.data });
      setPollingInterval(false);
      navigate('/podcast/download');
    }
  };

  useQuery(['get-podcast-status'], getStatus, {
    refetchInterval: pollInterval,
    onSuccess: onPollingRequestSuccess
  });
  const handleClose = () => {
    hideModal();
    setStatus('');
  };
  const handleCancel = () => {
    hideModal();
    setPollingInterval(false);
    setStatus('');
  };
  return (
    <Layout>
      <AuthWrapper>
        <div className={`customize-audio lg:px-20`}>
          <div className="breadcrumbs p-3 space-x-1  w-full flex items-center text-sec-500 capitalize md:space-x-3">
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
          </div>

          <main className="content w-full md:w-[80%]  mx-auto flex my-11 p-2 flex-col items-center">
            {/* pafe info */}
            <div className="info text-center  w-[350px] space-y-6 md:space-y-11 ">
              <Text w={'md'} type={'header2'} cap>
                Customise Video
              </Text>

              <Text w={'md'} type={'text4'} cap className={'text-sec-400'}>
                How many speakers are in your podcasts
              </Text>

              <div className="speaker-select mx-auto flex justify-center">
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
            </div>
            {/* pafe info */}

            <div className="customization-center  my-4 w-full space-y-3">
              <Text
                w={'md'}
                type={'text4'}
                cap
                className={'text-[#666666] text-center md:text-left'}>
                Video Selection Preview
              </Text>

              <VideoScene speakers={numberOfSpeakers} />
            </div>
            <AudioWidget />
          </main>

          {error && <p className="text-red-600 text-center">{error}</p>}
          <div className="centered w-full my-[5%]">
            <Button label={'render video'} onClick={handleClick}>
              Render video
            </Button>
          </div>
        </div>
        {modalOpen && (
          <Modal onClose={hideModal}>
            {status === 'ERROR' ? (
              <div className=" py-7 flex flex-col gap-10">
                <div className=" flex flex-col gap-5">
                  {' '}
                  <h1 className=" text-[22px] text-[red]"> Something went wrong!</h1>
                  <p> We could not render your video at the moment. Please try again</p>
                </div>
                <div>
                  {' '}
                  <button onClick={handleClose}>Close</button>
                </div>
              </div>
            ) : (
              <div className={styles.progressBarBox}>
                <h5>Your video is rendering...</h5>

                <div className={styles.progressBar}>
                  <PropagateLoader color="hsla(214, 98%, 47%, 1)" />
                  <p className="text-[12px] pt-12">
                    This may take a while. You will get an email notification when it is done
                    rendering.
                  </p>
                </div>
                <button onClick={handleCancel} className=" hover:text-[hsla(214, 98%, 47%, 1)]">
                  Cancel
                </button>
              </div>
            )}
          </Modal>
        )}
      </AuthWrapper>
    </Layout>
  );
};

export default CustomizeAudio;
