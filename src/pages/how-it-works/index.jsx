import Layout from '../../components/UI/Layout';
import arrowDownIcon from '../../assets/icons/arrow-down.svg';
import uploadIllustration from '../../assets/icons/Image.svg';
import customizeCharacterIllustration from '../../assets/icons/Group 817.svg';
import downloadIllustration from '../../assets/icons/Group 828.svg';
import documentUploadIcon from '../../assets/icons/document-download.svg';
import documentDownloadIcon from '../../assets/icons/document-upload.svg';
import uploadArrowUp from '../../assets/icons/arrow-up.svg';

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
      <main className=" container mx-auto">
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
                <div className=" flex gap-5 items-start">
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
      </main>
    </Layout>
  );
};

export default HowItWorks;
