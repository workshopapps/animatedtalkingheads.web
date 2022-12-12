import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Layout from '../../../components/UI/Layout';
import { Text } from '../../../components/UI/Text';
import { Modal } from '../../../components/UI/Modal/Modal';
import caretRight from '../../../assets/icons/carretRight.svg';
import styles from './styles.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import user from '../../../assets/icons/user.svg';
import './customize-audio.scss';
import VideoScene from './components/VideoScene';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Button } from '../../../components/UI/Button';
import AudioWidget from './components/AudioWidget';
import store from '../../../store/store.js';
import { setAvatar } from '../../../store/actions/customizeVideoActions';
import axios from 'axios';
import AuthWrapper from '../../../components/UI/Auth/AuthWrapper';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { formatId } from './data';


const CustomizeAudio = () => {
  const [numberOfSpeakers, setNumbers] = useState(1);
  // MODAL
  const [modalOpen, setModalOpen] = useState(false);
  const [error] = useState(false);
  const [status, setStatus] = useState('');
  // const [firstRender, setFirstRender] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'COMPLETED') return navigate('/podcast/download');
    console.log(status);
  }, [status]);

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

  const postData = async () => {
    const base_url = 'https://api.voxclips.hng.tech/podcasts/';
    const url = `${base_url}${podcast_id}/generate-video`;
    const headers = { Authorization: `Bearer ${bearerToken}` };
    const data = {
      bg_path: currentBackground.id,
      avater: {
        A: formatId(currentAvatar[0].id, 0),
        B: numberOfSpeakers > 1 ? formatId(currentAvatar[1].id, 1) : undefined,
        C: numberOfSpeakers > 2 ? formatId(currentAvatar[2].id, 2) : undefined,
      }
    };
    return await axios.post(url, data, { headers: headers });
  };

  const handleClick = async () => {
    try {
      showModal();
      const response = await postData();
      store.dispatch({ type: 'ADD_PODCAST_VIDEO', payload: response.data });
      setStatus(response.data?.status);
    } catch (err) {
      console.log({ err });
    }
  };

  const getStatus = async () => {
    const podcastID = store.getState().cartReducer.podcast_video._id;
    const url = `https://api.voxclips.hng.tech/animated-videos/${podcastID}`;

    return await axios.get(url, {
      headers: {
        Authorization: `Bearer ${bearerToken}`
      }
    }).then;
  };

  const isConclusiveData = (response) => {
    const conclusiveStatuses = ['COMPLETED', 'ERROR'];
    return response && conclusiveStatuses.includes(response.data?.status);
  };

  // const stopPolling = () => {
  //   setStatus(false);
  //   return false;
  // };

  useQuery(['podcast'], getStatus, {
    refetchInterval: (response) => {
      return isConclusiveData(response) ? false : 10000;
    }
    //(response) => (isConclusiveData(response) ? stopPolling() : 100000)
  });

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

            {/* current podcast's audio player widget */}
            <AudioWidget />
            {/* current podcast's audio player widget  end*/}
            {/* 
          <div className="customization-center-timestamp w-full my-6 space-y-3"></div> */}
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
            <div className={styles.progressBarBox}>
              <h5>Your video is rendering...</h5>

              <div className={styles.progressBar}>
                <PropagateLoader color="hsla(214, 98%, 47%, 1)" />
                <p className="text-[12px] pt-12">
                  This may take a while. You will get an email notification when it is done
                  rendering.
                </p>
              </div>
              <button onClick={hideModal}>Cancel</button>
            </div>
            <div className={styles.signUpBox}>{/* <SignUpSection /> */}</div>
          </Modal>
        )}
      </AuthWrapper>
    </Layout>
  );
};

export default CustomizeAudio;
