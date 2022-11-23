import { Text } from '../../../components/UI/Text';
import '../customize-audio.scss';
import bg1 from '../../../assets/images/scenery/background1.png';
import bg2 from '../../../assets/images/scenery/background2.png';
import bg3 from '../../../assets/images/scenery/background3.png';
import bg4 from '../../../assets/images/scenery/background4.png';
import bg5 from '../../../assets/images/scenery/background5.png';
import { TiMediaPlay } from 'react-icons/ti'
import { BsPauseFill } from 'react-icons/bs'
import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as Rewinder } from '../../../assets/icons/customize-audio/rewind.svg';
import { ReactComponent as Ffwd } from '../../../assets/icons/customize-audio/ffw.svg';
import mp3 from '../../../assets/audios/audio.mp3'


const audioElement = new Audio(mp3);

const CustomizeAudio = () => {
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    // Refs
    const audioRef = useRef(audioElement);
    const intervalRef = useRef();
    const sceneAray = [bg1, bg2, bg3, bg4, bg5]
    console.log(sceneAray.length);
    const { duration } = audioRef.current;
console.log(duration);
    //   useEffects
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            startTimer();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);


    useEffect(() => {
        // Pause and clean up on unmount
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        }
    }, []);


    // handlers

    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                audioRef.current.pause();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000]);
    }

    const onScrub = (value) => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);
    }

      const Rewinds = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = audioRef.current.currentTime - 10;
        setTrackProgress(audioRef.current.currentTime);
    }

     const FfwdTo = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = audioRef.current.currentTime + 10;
        setTrackProgress(audioRef.current.currentTime);
    }

    const onScrubEnd = () => {
        // If not already playing, start
        if (!isPlaying) {
            setIsPlaying(true);
        }
        startTimer();
    }

    return (
        <div className="customization-center-audio w-full my-6 space-y-3">
            <Text w={'md'} type={'text4'} cap className={'text-[#666666] text-center md:text-left'}>
                Audio Podcast.mp3
            </Text>

            <div className="audio_widget_wrapper rounded-lg w-full h-auto  border">
                <div className="audio-player w-full  space-y-2 p-4">
                    <input type="range"
                        value={trackProgress}
                        step="1"
                        min="0"
                        max={duration ? duration : `${duration}`}

                        onChange={(e) => onScrub(e.target.value)}
                        onMouseUp={onScrubEnd}
                        onKeyUp={onScrubEnd}
                        className="progress-bar-wrapper relative w-full h-[6px] bg-[#E5E5E5] rounded-lg" />



                    <AudioContols duration={duration} currentTime={audioRef?.current.currentTime} rewinder={Rewinds} FfwdTo={FfwdTo} isPlaying={isPlaying} onPlayPauseClick={() => setIsPlaying(!isPlaying)} />

                </div>
            </div>
        </div>
    );
};


function AudioContols({
    isPlaying,
    onPlayPauseClick,
rewinder,
FfwdTo,
currentTime,
duration
}) {
    return (
        <div className="controls middle justify-between">
            <div className="start">
                <p className="start-time">
                    {!isNaN(currentTime) && Math.floor(currentTime) || `0:00`}
                </p>
            </div>
            <div className="controls flex items-center space-x-3 ">

                <button onClick={rewinder} className="rewind ">
                    {/* <img src={rewind} alt="" /> */}
                    <Rewinder />
                </button>

                <button onClick={onPlayPauseClick} className="rewind ">
                    {
                        isPlaying ? (<BsPauseFill className='text-3xl' />) : (<TiMediaPlay className='text-3xl' />)
                    }


                </button>

                <button onClick={FfwdTo} className="rewind">
                    {/* <img src={ffw} alt="" /> */}
                    <Ffwd />
                </button>
            </div>
            <div className="end">
                <p className="end-time">
                    {duration && Math.floor(duration) || '3:00'}
                </p>
            </div>
        </div>
    )
}

export default CustomizeAudio;
