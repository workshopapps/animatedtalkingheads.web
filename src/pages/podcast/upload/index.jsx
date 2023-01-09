import Layout from '../../../components/UI/Layout';
import microphone from '../../../assets/icons/upload_podcast/microphone-podcast_upload.svg';
import musicnote from '../../../assets/icons/upload_podcast/musicnote.svg';

import music from '../../../assets/icons/upload_podcast/music.svg';
import correct from '../../../assets/icons/upload_podcast/correct.svg';
import { Button } from '../../../components/UI/Button';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../components/UI/Text';
import { Link } from 'react-router-dom';
import store from '../../../store/store';
import axios from 'axios';
import { Circle } from 'rc-progress';
import PageTitle from '../../../components/UI/page-title';
import AuthWrapper from '../../../components/UI/Auth/AuthWrapper';
import { UserAuth } from '../../../context/AuthContext';

const UploadPodcast = () => {
  const { user } = UserAuth();
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

  const [dragActive, setDragActive] = useState(false);

  // New Upload functionality

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

    const url = 'https://api.voxclips.hng.tech/podcasts/upload';

    const config = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        uploadStatus = Math.floor((loaded * 100) / total);

        if (uploadStatus <= 100) {
          setPercentage(uploadStatus);
        }
      },
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${user}`
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
      console.log(error.message);
      setError("We couldn't upload your podcast. Please try again");
      setUpload(false);
      setAudio(false);
      setUploaded(false);
      setLoading({ ...loading, isDisabled: false });
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setAudio(e.dataTransfer.files[0]);
      setName(e.dataTransfer.files[0].name);
    }
  };
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setAudio(e.target.files[0]);
      setName(e.target.files[0].name);
    }
  };

  return (
    <Layout>
      <PageTitle title="Upload audio" />
      <AuthWrapper>
        <div className="text-center max-w-[1440px] mx-auto   flex flex-col justify-center">
          <div className="opacity-60 my-5 w -[90%] border rounded-lg bg-[#EFF3F6] border-opacity-20 text-center py-5 px-2  gap-3 flex flex-col mx-auto">
            <Text label="Over 0.5MB, up to 500MB, 2 Hours max." type="text4" w="sm" />
            <div className="flex gap-1 justify-center items-center">
              <span>
                <img src={musicnote} alt="musicnote" className="max-w-[15px]" />
              </span>

              <Text label="File Format: mp3, wav or m4a" type="text4" w="sm" />
            </div>
          </div>

          <form
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onDragLeave={handleDrag}
            onSubmit={(e) => e.preventDefault()}>
            <input
              type="file"
              id="input-file-upload"
              // accept="audio/*"
              className=" hidden"
              onChange={handleChange}
            />
            <label
              id="label-file-upload"
              htmlFor="input-file-upload"
              className={` flex flex-col w-[80%]  sm:w-[70%] md:w-[60%] lg:w-[70%] cursor-pointer  my-5 py-3 border-[2px] bg-[#FFFFFF] rounded-lg border-dashed border-opacity-20 mx-auto ${
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
                    <img
                      src={microphone}
                      alt="microphone podcast"
                      className="w-[30px] md:w-[100px]"
                    />
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
                  <div>
                    <p>
                      or{' '}
                      <span className=" text-[#2563eb] cursor-pointer hover:underline">
                        {audio ? 'change file' : 'browse'}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {error && <p className="text-red-700">{error}</p>}
            </label>
          </form>
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
      </AuthWrapper>
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
