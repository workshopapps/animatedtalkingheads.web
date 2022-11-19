import Layout from '../../components/UI/Layout';
import arrowDownIcon from '../../assets/icons/arrow-down.svg';

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
      </main>
    </Layout>
  );
};

export default HowItWorks;
