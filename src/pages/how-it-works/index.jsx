import Layout from '../../components/UI/Layout';
import customizeCharacterIllustration from '../../assets/how-it-works/customize.png';
import customizeTwo from '../../assets/how-it-works/customize2.png';
import convert from '../../assets/how-it-works/convert.png';
import documentUploadIcon from '../../assets/how-it-works/icons/document-upload.svg';
import documentDownloadIcon from '../../assets/how-it-works/icons/document-download.svg';
import uploadArrowUp from '../../assets/how-it-works/icons/arrow-up.svg';
// import upload from '../../assets/how-it-works/upload.png';
import Lottie from 'lottie-react';
import uploadAnimation from '../../assets/animations/uploadAudioLottie.json';

//import videoThumbnailImg from '../../assets/how-it-works/how it works.svg';

import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { Button } from '../../components/UI/Button';
import { routes } from '../../libs/links';
import PageTitle from '../../components/UI/page-title';

const items = [
  {
    id: 1,
    step: 'step 1',
    heading: 'Upload your audio podcast',
    description: 'Get started and upload a sound file of your podcast from any device.',
    icon: documentUploadIcon,
    animation: uploadAnimation
  },

  {
    id: 2,
    step: 'step 2',
    heading: 'Customise your character',
    description: 'Select a character from our extensive library and modify it to your taste.',
    icon: uploadArrowUp,
    animation: '',
    illustration: customizeCharacterIllustration
  },
  {
    id: 3,
    step: 'step 3',
    heading: 'Customise your character and select a background',
    description: 'Select an eye catching backdrop image and include subtitles.',
    icon: uploadArrowUp,
    animation: '',
    illustration: customizeTwo
  },
  {
    id: 4,
    step: 'step 4',
    heading: 'Convert audio podcast to video and download.',
    description:
      'After Voxclips has generated your video podcast for you, download and enjoy. You now have a fascinating podcast video that viewers can watch.',
    icon: documentDownloadIcon,
    animation: '',
    illustration: convert
  }
];

const HowItWorks = () => {
  return (
    <Layout>
      <main className="bg-[#F5F5F5]">
        <PageTitle title="How it Works" />

        <div className={styles.heading2}>
          <h2>Four simple steps to create AI podcast videos</h2>

          <p>
            Voxclips allows podcasters to select and customise chararcters based on the number of
            speakers in the recorded audio. Backgrounds are added to create a colorful and
            captivating environment for viewers. Convert your audio podcasts to eyecatching videos
            in few clicks.
          </p>
        </div>

        <div className=" container mx-auto">
          <section
            id="watch_video"
            className="px-2 md:px-2 lg:px-6 xl:px-16 2xl:px-20 flex flex-col gap-8 py-6">
            {items.map((item) => (
              <div
                key={item.id}
                className={` ${
                  item.id === 2 || item.id === 3 ? 'md:flex-row-reverse' : 'md:flex-row'
                } flex flex-col  justify-between py-3 md:py-14 items-center gap-5`}>
                <div
                  className={`flex ${
                    item.id === 2 || item.id === 3 ? 'md:justify-end' : ''
                  } w-full`}>
                  <div>
                    <h5 className="py-3 md:py-4 ml-14 text-lg md:text-xl text-[#2563EB] font-bold uppercase">
                      {item.step}
                    </h5>
                    <div className="flex gap-3 items-start max-w-[520px]">
                      <img src={item.icon} alt="" />
                      <div className="text-[#292D32] flex flex-col gap-3">
                        <h3 className="text-[#292D32]  text-lg md:text-3xl font-semibold">
                          {item.heading}
                        </h3>
                        <p className="text-[#292D32]  text-sm md:text-2xl font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" w-full">
                  {/* if(items.animation != '') {
                    return (
                      <div className="lottie w-full">
                        <Lottie loop={true} autoplay={true} animationData={uploadAnimation} />
                      </div>
                    )
                  }  */}
                  
                  {/* <img className=" w-full" src={item.illustration} alt="" /> */}
                </div>
              </div>
            ))}
          </section>

          <section className=" flex flex-col justify-center items-center py-5 px-4">
            {/* <h3 className="max-w-[900px] text-xl md:text-4xl text-center text-[#292D32] font-medium">
              Video Tutorial on how to create
              videos for your podcasts using Voxclips
            </h3> */}

            {/* 
            <h3 className="max-w-[900px] text-xl md:text-4xl text-center text-[#292D32] font-medium">
              Video Tutorial on how to create videos for your podcasts using Voxclips
            </h3>

            <img
              className="mt-10 w-full md:max-w-md lg:max-w-2xl xl:max-w-3xl cursor-pointer"
              src={videoThumbnailImg}
              alt=""
            /> */}
          </section>
        </div>

        <section
          className={`h-[354px] bg-white flex flex-col items-center justify-center gap-6 px-3 md:px-11 py-7 relative mt-9`}>
          <h2 className="text-[#292D32] text-xl md:text-4xl text-center md:px-20  font-medium">
            Create your own Video Podcast
          </h2>
          <p className="max-w-[826px] text-sm md:text-2xl text-[#292D32] text-center md:px-20">
            Select your characters, choose your background, sync your podcast audio with your AI
            video generated from us, download, share and enjoy!
          </p>
          <Link to={routes.podcastUpload}>
            <Button className="px-10">Get started</Button>
          </Link>

          <div className={`${styles.blueLeftPattern}`}></div>
          <div className={` ${styles.blueRightPattern} `}></div>
          <div className={` ${styles.lightLeftPattern}`}></div>
          <div className={` ${styles.lightRightPattern}`}></div>
        </section>
      </main>
    </Layout>
  );
};

export default HowItWorks;
