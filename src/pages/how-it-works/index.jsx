import Layout from '../../components/UI/Layout';
import arrowDownIcon from '../../assets/how-it-works/icons/arrow-down.svg';
import uploadIllustration from '../../assets/how-it-works/Image.svg';
import customizeCharacterIllustration from '../../assets/how-it-works/Group 817.svg';
import downloadIllustration from '../../assets/how-it-works/Group 828.svg';
import documentUploadIcon from '../../assets/how-it-works/icons/document-download.svg';
import documentDownloadIcon from '../../assets/how-it-works/icons/document-upload.svg';
import uploadArrowUp from '../../assets/how-it-works/icons/arrow-up.svg';
import videoThumbnailImg from '../../assets/how-it-works/Frame 34667.svg';

import './styles.css';
import { Link } from 'react-router-dom';

const items = [
  {
    id: 1,
    step: 'step 1',
    heading: 'Upload your audio podcast',
    description: 'Get started and upload a sound fille of your podcast from any device.',
    icon: documentUploadIcon,
    illustration: uploadIllustration
  },

  {
    id: 2,
    step: 'step 2',
    heading: 'Customise your character and select a background',
    description:
      'Select a character from our extensive library and modify it to your taste. Select an eye catching backdrop image and include subtitles.',
    icon: uploadArrowUp,
    illustration: customizeCharacterIllustration
  },

  {
    id: 3,
    step: 'step 3',
    heading: 'Convert audio podcast to video and download.',
    description:
      'After Voxclips has generated your video podcast for you, download and enjoy. You now have a fascinating podcast video that viewers can watch.',
    icon: documentDownloadIcon,
    illustration: downloadIllustration
  }
];

const HowItWorks = () => {
  return (
    <Layout>
      <main>
        <div className=" container mx-auto">
          <section className=" flex flex-col justify-center items-center gap-2 px-4  py-7">
            <h3 className=" text-xl text-center text-pri-600">How Does It Work?</h3>
            <h1 className=" text-3xl lg:text-5xl text-center md:px-40  lg:px-52">
              Three simple steps to create AI podcast videos
            </h1>
            <p className=" text-center text-xl md:px-28 pt-10 pb-8">
              Voxclips allows podcasters to select and customise chararcters based on the number of
              speakers in the recorded audio. Backgrounds are added to created a colorful and
              captivating environment for viewers. Convert your audio podcasts to eyecatching videos
              in few clicks.
            </p>

            <button className=" text-base flex gap-3 items-center bg-pri-600 px-6 py-3 rounded-md text-white cursor-pointer">
              Watch Tutorial Video
              <img src={arrowDownIcon} alt="arrow-down-icon" />
            </button>
          </section>

          <section className=" flex flex-col gap-8 py-6">
            {items.map((item) => (
              <div
                key={item.id}
                className={` ${
                  item.id === 2 ? ' md:flex-row-reverse' : 'md:flex-row'
                } flex flex-col  justify-between px-3 md:px-8 py-3 md:py-6 items-center gap-5`}>
                <div className=" w-full">
                  <h5 className=" py-4 text-xl text-pri-600">{item.step}</h5>
                  <div className=" flex gap-3 items-start">
                    <img src={item.icon} alt="" />
                    <div className=" flex flex-col gap-3">
                      <h3 className=" text-2xl md:text-3xl">{item.heading}</h3>
                      <p className=" text-xl">{item.description}</p>
                    </div>
                  </div>
                </div>

                <div className=" w-full">
                  <img className=" w-full" src={item.illustration} alt="" />
                </div>
              </div>
            ))}
          </section>

          <section className=" flex flex-col justify-center items-center py-5 px-4">
            <h3 className=" text-xl text-center text-pri-600">UPLOAD, CUSTOMISE, DOWNLOAD</h3>
            <p className=" pb-7 pt-2 text-2xl md:text-4xl text-center">
              Video Tutorial on how to create videos for your podcasts using Voxclips
            </p>
            <img
              className=" w-full md:max-w-md lg:max-w-2xl xl:max-w-3xl cursor-pointer"
              src={videoThumbnailImg}
              alt=""
            />
          </section>
        </div>

        <section
          className={`flex flex-col items-center gap-6 bg-sec-1100 px-3 md:px-11 py-7 relative mt-9`}>
          <h2 className=" text-3xl md:text-5xl text-center md:px-20 ">
            Create your own <span className=" text-pri-600">Video Podcast</span>
          </h2>
          <p className=" text-center text-xl md:px-20">
            Select your characters, choose your background, sync your podcast audio with your AI
            video generated from us, download, share and enjoy!
          </p>
          <Link to="/podcast/upload">
            <button className=" text-base flex gap-3 items-center bg-pri-600 px-6 py-3 rounded-md text-white cursor-pointer">
              Get started with Voxclips
            </button>
          </Link>

          <div className={`md:visible invisible blue-left-pattern`}></div>
          <div className={` blue-right-pattern md:visible invisible`}></div>
          <div className={` light-left-pattern md:visible invisible`}></div>
          <div className={` md:visible invisible light-right-pattern`}></div>
        </section>
      </main>
    </Layout>
  );
};

export default HowItWorks;
