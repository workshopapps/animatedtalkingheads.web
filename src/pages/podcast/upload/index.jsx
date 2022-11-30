import Layout from '../../../components/UI/Layout';
import microphone from '../../../assets/icons/upload_podcast/microphone-podcast_upload.svg';
import musicnote from '../../../assets/icons/upload_podcast/musicnote.svg';

import music from '../../../assets/icons/upload_podcast/music.svg';
import correct from '../../../assets/icons/upload_podcast/correct.svg';
import { Button } from '../../../components/UI/Button';
import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../components/UI/Text';
import styles from '../upload/index.module.scss';
import { Link } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { audio_formats } from './data';
import store from '../../../store/store';

const UploadPodcast = () => {
  console.log(store.getState());

  const [audio, setAudio] = useState(null);
  const [name, setName] = useState(null);
  const [upload, setUpload] = useState(false);
  const [error, setError] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [loading, setLoading] = useState({
    label: 'Upload',
    isDisabled: false
  });

  const onDrop = useCallback((acceptedFiles) => {
    setAudio(acceptedFiles[0]);
    console.log(acceptedFiles[0]);
    setName(acceptedFiles[0].name);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const uploadFile = () => {
    const audioFormat = audio_formats.find((x) => 'audio/' + x === audio.type);
    if (!audioFormat) {
      setError('Only audio files are supported');
    } else if (audio) {
      setLoading({ ...loading, isDisabled: true });
      setUpload(true);
      uploadFunction();
    }
  };

  const uploadFunction = () => {
    setError(false);
    const data = new FormData();
    data.append('podcast', audio);

    fetch('https://api.voxlips.hng.tech/podcasts/upload/', {
      method: 'POST',
      mode: 'cors',
      body: data
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        store.dispatch({ type: 'ADD_PODCAST_ITEM', payload: data });
        setUpload(false);
        setUploaded(true);
      })
      .catch((err) => {
        setError(err.message);
        setUpload(false);
        setAudio(false);
        setUploaded(false);
        setLoading({ ...loading, isDisabled: false });
        console.log(err.message);
      });
  };

  return (
    <Layout>
      <div className="text-center max-w-[1440px] w-[90%] mx-auto mt-10 ">
        <Text label="Upload Audio" w="semibold" type="text1" data-testid="header" />
        <div className="opacity-60 my-5 border rounded-lg bg-[#EFF3F6] border-opacity-20 text-center py-5 px-2 grid gap-3">
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
          className={` cursor-pointer  my-5 py-10 border-[3px] bg-[#FFFFFF] rounded-lg border-dashed border-opacity-20 w-[90%] mx-auto ${
            error && 'border-red-600 opacity-100'
          }`}>
          <div className="flex justify-center">
            {uploaded ? (
              <img src={correct} alt="microphone podcast" className="w-[30px] md:w-[50px]" />
            ) : (
              <img src={microphone} alt="microphone podcast" className="w-[30px] md:w-[100px]" />
            )}
          </div>

          {!uploaded && (
            <div>
              {!upload ? (
                <div></div>
              ) : (
                <div>
                  <Text label="Your file is uploading" type="text2" w="sm" />
                  <div className={styles.ring}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              )}
            </div>
          )}

          {uploaded && (
            <div className="flex justify-center mt-5">
              <img src={music} alt="microphone podcast" className="w-[20px] md:w-[30px]" />
            </div>
          )}
          <div className=" justify-center gap-2 items-center mb-20">
            <div className="">
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
                  <span className="text-pri-600 cursor-pointer">
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
            <div className="my-10 justify-center flex">
              <Button label="Start Creating" />
            </div>
          </Link>
        ) : (
          <div className="my-10 justify-center flex ">
            <Button {...loading} onClick={uploadFile} />
          </div>
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
