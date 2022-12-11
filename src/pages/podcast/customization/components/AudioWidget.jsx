// import { Text } from '../../../../components/UI/Text';
// //import '../customize-audio.scss';
// // import bg1 from '../../../../assets/images/scenery/background1.png';
// // import bg2 from '../../../../assets/images/scenery/background2.png';
// // import bg3 from '../../../../assets/images/scenery/background3.png';
// // import bg4 from '../../../../assets/images/scenery/background4.png';
// // import bg5 from '../../../../assets/images/scenery/background5.png';
// import { TiMediaPlay } from 'react-icons/ti';
// import { BsPauseFill } from 'react-icons/bs';
import React from 'react';
// import { ReactComponent as Rewinder } from '../../../../assets/icons/customize-audio/rewind.svg';
// import { ReactComponent as Ffwd } from '../../../../assets/icons/customize-audio/ffw.svg';
// import mp3 from '../../../../assets/audios/audio.mp3'
import '../customize-audio.scss';
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
