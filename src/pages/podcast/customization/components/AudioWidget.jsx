import { Text } from '../../../../components/UI/Text';
import '../customize-audio.scss';
import React, { useState, useEffect, useRef } from 'react';
import store from '../../../../store/store';

const CustomizeAudio = () => {
  const audioPath = store.getState().cartReducer.podcast_audio.file_url;

  return (
    <div className="customization-center-audio w-full my-6 space-y-3">
      <div className="audio_widget_wrapper rounded-lg w-full h-auto ">
        <div className="audio-player w-full  space-y-2 p-4 flex justify-center">
          <audio controls>
            <source src={audioPath} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
};

export default CustomizeAudio;
