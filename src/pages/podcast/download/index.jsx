import Layout from '../../../components/UI/Layout';
import { useState, useRef, useEffect } from 'react';
import '../download/styles/index.css';
// import video from './assets/video.mp4';
import PageTitle from '../../../components/UI/page-title';
import AuthWrapper from '../../../components/UI/Auth/AuthWrapper';
// import '../../../components/UI/Button/button.module.scss'
import store from '../../../store/store';

const DownloadPodcast = () => {
  const [videoQuality, setVideoQuality] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const videoRef = useRef();
  const [isPaused, setIsPaused] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const video_url = store.getState().cartReducer.podcast_video.video_url;

  const handleChange = (e) => {
    const { value } = e.target;
    setVideoQuality(value);
    setIsChecked(true);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const containerClasses = {
    default: 'video-container',
    paused: 'video-container paused',
    fullScreenPaused: 'video-container paused fullscreen',
    fullscreen: 'video-container fullscreen'
  };

  const containerToggleClass = () => {
    // if((isFullScreen)
    // if fullScreen is true - run fullscreen

    // Default
    let result = containerClasses.default;

    // ON PAUSE/PLAY
    // Add paused
    if (isPaused) {
      result = containerClasses.paused;
    }

    // ON PAUSE/PLAY
    // Add fullScreen
    if (isFullScreen) {
      result = containerClasses.fullscreen;
    }

    // ON PAUSE/PLAY and FULLScreen??
    // Add fullScreen & Paused
    if (isFullScreen && isPaused) {
      result = containerClasses.fullScreenPaused;
    }
    return result;
  };

  let rhsToggleClass = isFullScreen ? 'desktop-rhs hide' : 'desktop-rhs';

  // console.log(videoRef.current);

  const togglePlay = () => {
    isPaused ? videoRef.current.play() : videoRef.current.pause();
    setIsPaused(!isPaused);
  };

  //Download video Func
  // const downloadVideo = () => {
  //   window.location.href = {video}
  // }

  // PlayBack Speed

  const [playbackRate, setPlaybackRate] = useState(1);

  useEffect(() => {
    videoRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  const fastForward = () => {
    if (playbackRate <= 5) {
      setPlaybackRate((prevPlayBackRate) => prevPlayBackRate + 5);
    }
  };

  const backForward = () => {
    if (playbackRate >= 5) {
      setPlaybackRate((prevPlayBackRate) => prevPlayBackRate - 5);
    }
  };

  return (
    <Layout>
      <AuthWrapper>
        <PageTitle title="Download" />
        <section className="download-video-section">
          <div className="download-video">
            <h1 className="page-title">Your Talking Head Video is Available for Download</h1>
            <div className="page-content">
              <div className="desktop-lhs ">
                <div className={containerToggleClass()}>
                  {/* <iframe width="560" height="315" src="https://player.vimeo.com/video/499958263?h=06b4122553" title="VoxClips video player" allowFullScreen></iframe> */}
                  <div className="video-controls-container">
                    <div className="timeline-container">
                      <div className="timeline">
                        <div className="thumb-indicator"></div>
                      </div>
                    </div>
                    <div className="controls">
                      <button onClick={backForward} className="rewind-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
                          <path
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M21.54 27.918v-5.34l-1.5 1.67M22.02 16.47 24 14"
                          />
                          <path
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M16.91 19.799c-1.11 1.48-1.8 3.31-1.8 5.31a8.89 8.89 0 0 0 8.89 8.89 8.89 8.89 0 0 0 8.89-8.89 8.89 8.89 0 0 0-8.89-8.89c-.68 0-1.34.09-1.98.24"
                          />
                          <path
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M26 22.578c1.1 0 2 .9 2 2v1.35c0 1.1-.9 2-2 2s-2-.9-2-2v-1.35a2 2 0 0 1 2-2Z"
                          />
                        </svg>
                      </button>
                      <button onClick={togglePlay} className="play-pause-button">
                        <svg
                          className="pause-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          fill="none">
                          <path
                            fill="#fff"
                            d="M22.65 31.11V16.89c0-1.35-.57-1.89-2.01-1.89h-3.63c-1.44 0-2.01.54-2.01 1.89v14.22c0 1.35.57 1.89 2.01 1.89h3.63c1.44 0 2.01-.54 2.01-1.89ZM33.002 31.11V16.89c0-1.35-.57-1.89-2.01-1.89h-3.63c-1.43 0-2.01.54-2.01 1.89v14.22c0 1.35.57 1.89 2.01 1.89h3.63c1.44 0 2.01-.54 2.01-1.89Z"
                          />
                        </svg>
                        <svg
                          className="play-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          fill="none">
                          <path
                            fill="#fff"
                            d="M15 18.134v11.734c0 2.403 2.86 3.912 5.143 2.71l5.572-2.93 5.573-2.944c2.283-1.201 2.283-4.205 0-5.407l-5.573-2.943-5.572-2.93C17.86 14.222 15 15.718 15 18.134Z"
                          />
                        </svg>
                      </button>
                      <button onClick={fastForward} className="forward-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
                          <path
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M25.98 16.47 24 14M31.09 19.799c1.11 1.48 1.8 3.31 1.8 5.31a8.89 8.89 0 0 1-8.89 8.89 8.89 8.89 0 0 1-8.89-8.89 8.89 8.89 0 0 1 8.89-8.89c.68 0 1.34.09 1.98.24"
                          />
                          <path
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M21.54 27.918v-5.34l-1.5 1.67M26 22.578c1.1 0 2 .9 2 2v1.35c0 1.1-.9 2-2 2s-2-.9-2-2v-1.35a2 2 0 0 1 2-2Z"
                          />
                        </svg>
                      </button>
                      <button className="subtitle-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
                          <path
                            fill="#fff"
                            d="M28.19 14h-8.38C16.17 14 14 16.17 14 19.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81v-8.38C34 16.17 31.83 14 28.19 14ZM18.5 24.57h2.77c.41 0 .75.34.75.75s-.34.75-.75.75H18.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75Zm6.47 5.26H18.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.47a.749.749 0 1 1 0 1.5Zm4.53 0h-1.85c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.85c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-3.76h-5.53c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.53c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                          />
                        </svg>
                      </button>
                      <button onClick={toggleFullScreen} className="full-screen-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
                          <path
                            fill="#fff"
                            d="M18 17.25a.75.75 0 0 0-.75.75v2.421a1.125 1.125 0 1 1-2.25 0V18a3 3 0 0 1 3-3h2.421a1.125 1.125 0 1 1 0 2.25H18Zm8.454-1.125A1.125 1.125 0 0 1 27.579 15H30a3 3 0 0 1 3 3v2.421a1.125 1.125 0 1 1-2.25 0V18a.75.75 0 0 0-.75-.75h-2.421a1.125 1.125 0 0 1-1.125-1.125ZM16.125 26.454a1.125 1.125 0 0 1 1.125 1.125V30a.75.75 0 0 0 .75.75h2.421a1.125 1.125 0 1 1 0 2.25H18a3 3 0 0 1-3-3v-2.421a1.125 1.125 0 0 1 1.125-1.125Zm15.75 0A1.125 1.125 0 0 1 33 27.579V30a3 3 0 0 1-3 3h-2.421a1.125 1.125 0 1 1 0-2.25H30a.75.75 0 0 0 .75-.75v-2.421a1.125 1.125 0 0 1 1.125-1.125Z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <video ref={videoRef} src={video_url} controls className=" lg:w-[100%]" />
                </div>
              </div>

              <div className={rhsToggleClass}>
                <div className="video-settings">
                  <h3 className="video-settings__heading">Select Download Quality</h3>
                  <p className="video-settings__par">
                    Choose which of the video qualities you’d like to download
                  </p>
                </div>

                <fieldset className="video-settings-quality-container">
                  <div className="video-settings-quality">
                    <label htmlFor="480p">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <path
                          fill="#171D2E"
                          d="M21.15 6.17c-.41-.22-1.27-.45-2.44.37l-1.47 1.04c-.11-3.11-1.46-4.33-4.74-4.33h-6C3.08 3.25 1.75 4.58 1.75 8v8c0 2.3 1.25 4.75 4.75 4.75h6c3.28 0 4.63-1.22 4.74-4.33l1.47 1.04c.62.44 1.16.58 1.59.58.37 0 .66-.11.85-.21.41-.21 1.1-.78 1.1-2.21V8.38c0-1.43-.69-2-1.1-2.21ZM11 11.38c-1.03 0-1.88-.84-1.88-1.88S9.97 7.62 11 7.62c1.03 0 1.88.84 1.88 1.88s-.85 1.88-1.88 1.88Z"
                          opacity=".8"
                        />
                      </svg>
                      480p
                    </label>
                    <input
                      value="480p"
                      name="video-quality"
                      type="radio"
                      id="480p"
                      onChange={handleChange}
                      checked={videoQuality === '480p'}
                    />
                  </div>

                  <div className="video-settings-quality">
                    <label htmlFor="720p">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <path
                          fill="#171D2E"
                          d="M21.15 6.17c-.41-.22-1.27-.45-2.44.37l-1.47 1.04c-.11-3.11-1.46-4.33-4.74-4.33h-6C3.08 3.25 1.75 4.58 1.75 8v8c0 2.3 1.25 4.75 4.75 4.75h6c3.28 0 4.63-1.22 4.74-4.33l1.47 1.04c.62.44 1.16.58 1.59.58.37 0 .66-.11.85-.21.41-.21 1.1-.78 1.1-2.21V8.38c0-1.43-.69-2-1.1-2.21ZM11 11.38c-1.03 0-1.88-.84-1.88-1.88S9.97 7.62 11 7.62c1.03 0 1.88.84 1.88 1.88s-.85 1.88-1.88 1.88Z"
                          opacity=".8"
                        />
                      </svg>
                      720p
                    </label>
                    <input
                      value="720p"
                      name="video-quality"
                      type="radio"
                      id="720p"
                      onChange={handleChange}
                      checked={videoQuality === '720p'}
                    />
                  </div>

                  <div className="video-settings-quality">
                    <label htmlFor="1080p">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <path
                          fill="#171D2E"
                          d="M21.15 6.17c-.41-.22-1.27-.45-2.44.37l-1.47 1.04c-.11-3.11-1.46-4.33-4.74-4.33h-6C3.08 3.25 1.75 4.58 1.75 8v8c0 2.3 1.25 4.75 4.75 4.75h6c3.28 0 4.63-1.22 4.74-4.33l1.47 1.04c.62.44 1.16.58 1.59.58.37 0 .66-.11.85-.21.41-.21 1.1-.78 1.1-2.21V8.38c0-1.43-.69-2-1.1-2.21ZM11 11.38c-1.03 0-1.88-.84-1.88-1.88S9.97 7.62 11 7.62c1.03 0 1.88.84 1.88 1.88s-.85 1.88-1.88 1.88Z"
                          opacity=".8"
                        />
                      </svg>
                      1080p
                    </label>
                    <input
                      value="1080p"
                      name="video-quality"
                      type="radio"
                      id="1080p"
                      onChange={handleChange}
                      checked={videoQuality === '1080p'}
                    />
                  </div>

                  <div className="video-settings-quality">
                    <label htmlFor="4k">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <path
                          fill="#171D2E"
                          d="M21.15 6.17c-.41-.22-1.27-.45-2.44.37l-1.47 1.04c-.11-3.11-1.46-4.33-4.74-4.33h-6C3.08 3.25 1.75 4.58 1.75 8v8c0 2.3 1.25 4.75 4.75 4.75h6c3.28 0 4.63-1.22 4.74-4.33l1.47 1.04c.62.44 1.16.58 1.59.58.37 0 .66-.11.85-.21.41-.21 1.1-.78 1.1-2.21V8.38c0-1.43-.69-2-1.1-2.21ZM11 11.38c-1.03 0-1.88-.84-1.88-1.88S9.97 7.62 11 7.62c1.03 0 1.88.84 1.88 1.88s-.85 1.88-1.88 1.88Z"
                          opacity=".8"
                        />
                      </svg>
                      4k
                    </label>
                    <input
                      value="4k"
                      name="video-quality"
                      type="radio"
                      id="4k"
                      onChange={handleChange}
                      checked={videoQuality === '4k'}
                    />
                  </div>
                </fieldset>
                <a
                  href={isChecked ? video_url : ''}
                  target={'_blank'}
                  rel="noreferrer"
                  download={isChecked ? video_url : ''}>
                  <button
                    disabled={isChecked ? false : true}
                    value="download"
                    style={{ opacity: isChecked ? '100%' : '40%' }}
                    className="button">
                    Download Now
                  </button>
                </a>
                {/* <div className="video-share-container">
                  <h3>or</h3>
                  <div className="video-share">
                    <h3 className="video-share__heading">Share video via:</h3>
                    <div className="video-share__icons">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <g clipPath="url(#a)">
                          <path
                            fill="#1877F2"
                            d="M22.5 11.999c0-5.8-4.701-10.5-10.5-10.5s-10.5 4.7-10.5 10.5c0 5.24 3.84 9.584 8.86 10.372v-7.337H7.692v-3.035h2.666V9.685c0-2.631 1.568-4.085 3.966-4.085 1.15 0 2.35.205 2.35.205V8.39h-1.323c-1.305 0-1.711.81-1.711 1.64v1.97h2.912l-.466 3.035h-2.446v7.337C18.66 21.583 22.5 17.24 22.5 12Z"
                          />
                          <path
                            fill="#fff"
                            d="M16.09 15.035 16.554 12h-2.912v-1.97c0-.83.406-1.64 1.71-1.64h1.325V5.808s-1.202-.205-2.35-.205c-2.4 0-3.967 1.453-3.967 4.085V12H7.695v3.035h2.666v7.337a10.576 10.576 0 0 0 3.282 0v-7.337h2.446Z"
                          />
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="#fff" d="M1.5 1.5h21v21h-21z" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <g clipPath="url(#a)">
                          <path
                            fill="#1D9BF0"
                            d="M20.295 7.353c.013.184.013.369.013.554 0 5.662-4.302 12.191-12.167 12.191v-.003a12.09 12.09 0 0 1-6.555-1.92 8.576 8.576 0 0 0 6.329-1.776 4.283 4.283 0 0 1-3.995-2.976 4.256 4.256 0 0 0 1.93-.074 4.283 4.283 0 0 1-3.43-4.2v-.054c.594.332 1.26.516 1.94.536a4.295 4.295 0 0 1-1.323-5.72 12.13 12.13 0 0 0 8.814 4.476 4.293 4.293 0 0 1 1.237-4.094 4.275 4.275 0 0 1 6.05.186 8.57 8.57 0 0 0 2.715-1.04 4.3 4.3 0 0 1-1.88 2.37 8.492 8.492 0 0 0 2.456-.675 8.697 8.697 0 0 1-2.134 2.22Z"
                          />
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="#fff" d="M1.5 3h21v17.308h-21z" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <g clipPath="url(#a)">
                          <path
                            fill="#ED1D24"
                            d="M22.061 6.804a2.634 2.634 0 0 0-1.856-1.862c-1.638-.44-8.205-.44-8.205-.44s-6.567 0-8.205.44A2.634 2.634 0 0 0 1.94 6.804c-.439 1.642-.439 5.07-.439 5.07s0 3.427.439 5.07c.241.906.953 1.62 1.856 1.862 1.638.44 8.205.44 8.205.44s6.567 0 8.205-.44a2.634 2.634 0 0 0 1.856-1.862c.439-1.643.439-5.07.439-5.07s0-3.428-.439-5.07Z"
                          />
                          <path fill="#fff" d="m9.852 14.984 5.488-3.111L9.852 8.76v6.223Z" />
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="#fff" d="M1.5 4.5h21v14.745h-21z" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" fill="none">
                        <path
                          fill="#010101"
                          fillRule="evenodd"
                          d="M2.8 0h18.4a2.3 2.3 0 0 1 2.3 2.3v18.4a2.3 2.3 0 0 1-2.3 2.3H2.8a2.3 2.3 0 0 1-2.3-2.3V2.3A2.3 2.3 0 0 1 2.8 0Z"
                          clipRule="evenodd"
                        />
                        <path
                          fill="#EE1D51"
                          fillRule="evenodd"
                          d="M14.94 21.154c.7 0 1.268-.562 1.268-1.256 0-.695-.567-1.257-1.267-1.257h-.191c.7 0 1.267.563 1.267 1.257s-.567 1.256-1.267 1.256h.19Z"
                          clipRule="evenodd"
                        />
                        <path
                          fill="#66C8CF"
                          fillRule="evenodd"
                          d="M14.728 18.64h-.191c-.7 0-1.268.563-1.268 1.258 0 .694.568 1.256 1.268 1.256h.19c-.7 0-1.267-.562-1.267-1.256 0-.695.568-1.257 1.268-1.257Z"
                          clipRule="evenodd"
                        />
                        <path
                          fill="#010101"
                          d="M14.741 20.511c.34 0 .617-.273.617-.61a.614.614 0 0 0-.617-.612.614.614 0 0 0-.616.611c0 .338.276.611.616.611Z"
                        />
                        <path
                          fill="#fff"
                          fillRule="evenodd"
                          d="M5.102 18.078v.637h.746v2.428h.746v-2.41h.608l.208-.655H5.102Zm6.11 0v.637h.746v2.428h.747v-2.41h.607l.208-.655h-2.308Zm-3.663.362c0-.2.163-.362.364-.362.202 0 .365.162.365.362 0 .2-.163.361-.365.361a.363.363 0 0 1-.364-.361Zm0 .62h.729v2.083H7.55V19.06Zm1.042-.982v3.065h.729v-.792l.225-.207.712 1.016h.781l-1.024-1.48.92-.896h-.885l-.73.723v-1.429h-.728Zm7.863 0v3.065h.729v-.792l.226-.207.711 1.016h.782l-1.025-1.48.92-.896h-.885l-.729.723v-1.429h-.73Z"
                          clipRule="evenodd"
                        />
                        <path
                          fill="#EE1D52"
                          fillRule="evenodd"
                          d="M15.326 7.47a6.125 6.125 0 0 0 3.572 1.143V6.05c-.252 0-.503-.027-.75-.079V7.99a6.126 6.126 0 0 1-3.572-1.143v5.23a4.737 4.737 0 0 1-7.377 3.934 4.737 4.737 0 0 0 8.127-3.311V7.47Zm.925-2.585a3.57 3.57 0 0 1-.925-2.09v-.33h-.711a3.587 3.587 0 0 0 1.636 2.42Zm-7.397 9.118a2.167 2.167 0 0 1 2.383-3.376v-2.62a4.782 4.782 0 0 0-.75-.043v2.039a2.167 2.167 0 0 0-1.633 4Z"
                          clipRule="evenodd"
                        />
                        <path
                          fill="#fff"
                          fillRule="evenodd"
                          d="M14.57 6.846a6.126 6.126 0 0 0 3.573 1.143V5.972a3.586 3.586 0 0 1-1.896-1.087 3.587 3.587 0 0 1-1.637-2.42h-1.867v10.234a2.167 2.167 0 0 1-3.894 1.304 2.166 2.166 0 0 1 1.633-4V7.964a4.737 4.737 0 0 0-3.288 8.046 4.737 4.737 0 0 0 7.376-3.935V6.846Z"
                          clipRule="evenodd"
                        />
                        <path
                          fill="#69C9D0"
                          fillRule="evenodd"
                          d="M18.151 5.975v-.546a3.574 3.574 0 0 1-1.897-.541 3.583 3.583 0 0 0 1.897 1.087Zm-3.533-3.507a3.64 3.64 0 0 1-.04-.295v-.33H12v10.235a2.167 2.167 0 0 1-3.143 1.928 2.167 2.167 0 0 0 3.893-1.304V2.467h1.868ZM10.49 7.967v-.581a4.737 4.737 0 0 0-3.288 8.627 4.737 4.737 0 0 1 3.288-8.046Z"
                          clipRule="evenodd"
                        />
                        <path
                          fill="#fff"
                          fillRule="evenodd"
                          d="M14.75 21.154c.7 0 1.267-.562 1.267-1.256 0-.695-.568-1.257-1.268-1.257h-.017c-.7 0-1.267.563-1.267 1.257s.567 1.256 1.267 1.256h.017Zm-.626-1.256c0-.338.276-.611.617-.611.34 0 .616.273.616.61a.614.614 0 0 1-.616.612.614.614 0 0 1-.617-.611Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </AuthWrapper>
    </Layout>
  );
};

export default DownloadPodcast;
