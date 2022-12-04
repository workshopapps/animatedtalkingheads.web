import Layout from '../../../components/UI/Layout';
import microphone from '../../../assets/icons/upload_podcast/microphone-podcast_upload.svg';
import musicnote from '../../../assets/icons/upload_podcast/musicnote.svg';

import music from '../../../assets/icons/upload_podcast/music.svg';
import correct from '../../../assets/icons/upload_podcast/correct.svg';
import { Button } from '../../../components/UI/Button';
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../components/UI/Text';
import { Link } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import store from '../../../store/store';
import axios from 'axios';
import { Circle } from 'rc-progress';

const UploadPodcast = () => {
  const [audio, setAudio] = useState(null);
  const [name, setName] = useState(null);
  const [upload, setUpload] = useState(false);
  const [error, setError] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [loading, setLoading] = useState({
    label: 'Upload',
    isDisabled: false
  });

  const onDrop = useCallback((acceptedFiles) => {
    setAudio(acceptedFiles[0]);
    setName(acceptedFiles[0].name);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  useEffect(() => {
    if (audio) {
      if (!audio.type.includes('audio')) {
        setError('Only audio files are supported');
      } else if (audio) {
        setLoading({ ...loading, isDisabled: true });
        setUpload(true);
        uploadToServer();
      }
    }
  }, [name, audio]);

  const uploadToServer = async () => {
    setError(false);
    const formData = new FormData();
    formData.append('podcast', audio);
    let uploadStatus = 0;

    // This is a temporary upload endpoint
    const url = 'http://167.172.58.43/upload_files';

    const config = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        console.log(loaded, total);
        uploadStatus = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${uploadStatus}%`);

        if (uploadStatus <= 100) {
          setPercentage(uploadStatus);
        }
      },
      mode: 'cors',
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };

    try {
      const resp = await axios.post(url, formData, config);
      const data = await resp.data;
      store.dispatch({ type: 'ADD_PODCAST_ITEM', payload: data });
      setPercentage(uploadStatus, () => {
        setTimeout(() => {
          setPercentage(0);
        }, 1000);
      });
      setUpload(false);
      setUploaded(true);
    } catch (error) {
      setError(error.message);
      setUpload(false);
      setAudio(false);
      setUploaded(false);
      setLoading({ ...loading, isDisabled: false });
    }
  };

  return (
    <Layout>
      <div className="text-center max-w-[1440px] mx-auto   flex flex-col justify-center">
        <div className="bg-[#171D2E] text-[#FFFFFF] py-6 mt-0">
          <Text label="Upload Audio" w="semibold" type="text1" data-testid="header" />
        </div>
        <div className="opacity-60 my-5 w-[90%] border rounded-lg bg-[#EFF3F6] border-opacity-20 text-center py-5 px-2  gap-3 flex flex-col mx-auto">
          <Text label="Over 0.5MB, up to 500MB, 2 Hours max." type="text4" w="sm" />
          <div className="flex gap-1 justify-center items-center">
            <span>
              <img src={musicnote} alt="musicnote" className="max-w-[15px]" />
            </span>

            <Text label="File Format: mp3, wav or m4a" type="text4" w="sm" />
          </div>
        </div>

        <div
          {...getRootProps()}
          className={` w-[80%]  sm:w-[70%] md:w-[60%] lg:w-[70%] cursor-pointer  my-5 py-3 border-[3px] bg-[#FFFFFF] rounded-lg border-dashed border-opacity-20 mx-auto ${
            error && 'border-red-600 opacity-100'
          }`}>
          <div className="flex justify-center">
            {uploaded ? (
              <div>
                <img
                  src={correct}
                  alt="microphone podcast"
                  className="w-[30px] md:w-[50px] text-[#2563eb]"
                />
              </div>
            ) : (
              <div>
                <img src={microphone} alt="microphone podcast" className="w-[30px] md:w-[100px]" />
              </div>
            )}
          </div>

          {!uploaded && (
            <div>
              {!upload ? (
                <div></div>
              ) : (
                <div className="flex flex-col justify-center gap-5">
                  <Text label="Your file is uploading" type="text2" w="sm" />
                  {percentage > 0 && (
                    <div className=" flex justify-center">
                      <Circle
                        percent={percentage}
                        trailWidth={5}
                        strokeWidth={5}
                        strokeColor="#2563eb"
                        className=" w-[60px] lg:w-[70px]"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {uploaded && (
            <div className="flex justify-center mt-11 gap-5 ">
              <img src={music} alt="microphone podcast" className="w-[20px] md:w-[30px]" />
            </div>
          )}
          <div className="flex flex-col justify-center gap-3 items-center mb-20">
            <div className=" mt-10">
              {name ? (
                <Text label={name} type="text4" w="sm" />
              ) : (
                <Text label="Drag and Drop Podcast Audio" type="text2" w="sm" />
              )}
            </div>
            <div>
              <input {...getInputProps({ id: 'mine', accept: 'audio/*' })} />
              <div>
                <p>
                  or{' '}
                  <span className=" text-[#2563eb] cursor-pointer">
                    {audio ? 'change file' : 'browse'}
                  </span>
                </p>
              </div>
            </div>
          </div>
          {error && <p className="text-red-700">{error}</p>}
        </div>
        {uploaded ? (
          <Link to="/podcast/customize">
            <div className="my-5 justify-center flex">
              <Button label="Start Creating"> Start Creating</Button>
            </div>
          </Link>
        ) : (
          <div className="h-[115px]"></div>
        )}
      </div>
    </Layout>
  );
};

UploadPodcast.propTypes = {
  loading: PropTypes.object,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  label: PropTypes.number,
  name: PropTypes.string
};

export default UploadPodcast;
