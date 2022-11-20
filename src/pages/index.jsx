import Layout from '../components/UI/Layout';
import ChatIcon from '../assets/icons/chat-icon.svg';
import Inverted from '../assets/icons/inverted.svg';
import Quotes from '../assets/icons/quotes.svg';
import Microphone from '../assets/icons/microphone.png';
import HeroIcon from '../assets/images/hero-anime.png';
import MarkImg from '../assets/images/mark-essien.png';
import LavyImg from '../assets/images/lavy-engine.png';
import NonsoImg from '../assets/images/Nonso.png';
import Avatar1 from '../assets/images/avatar-one.png';
import Avatar2 from '../assets/images/avatar-two.png';
import Avatar3 from '../assets/images/avatar-three.png';
import Avatar4 from '../assets/images/avatar-four.png';
import Avatar5 from '../assets/images/avatar-five.png';
import Avatar6 from '../assets/images/avatar-six.png';

import { Button } from '../components/UI/Button';

const Home = () => {
  return (
    <Layout>
      <main className="bg-sec md:pb-[100px] relative">
        <div className="w-full  pt-[60px] md:pt-[120px]  ">
          <h1 className="text-white text-2xl md:text-5xl font-extrabold max-w-[80%] text-center mx-auto mb-6">
            Convert Your Podcasts Audio Into Video with Heads that talk!
          </h1>
          <p className="mx-auto text-center text-base max-w-[80%] text-white md:text-[32px] mb-12 md:mb-[150px] md:leading-10 font-medium">
            Turn your audio podcasts into a video with our various characters customizable to your
            liking.
          </p>
        </div>
        <div className=" md:flex  md:items-center md-justify-between md:max-w-[90%] mx-auto pb-10">
          <div className="w-[60%]  mx-auto   md:w-[50%] md:mx-auto">
            <img
              src={HeroIcon}
              className="w-[100%]   border-solid  border-orange-500 "
              alt="animated heads"
            />
          </div>

          <div className="px-10  min-w-[25%] max-w-[360px] mx-auto h-auto rounded-2xl  md:bg-white relative">
            <img
              src={Inverted}
              alt="inverted comma designs"
              className="absolute hidden md:block top-[-60px] left-[-60px] "
            />
            <h3 className="pt-12 text-center italic text-2xl text-black opacity-50 capitalize mb-4 hidden md:block">
              your podcast
            </h3>
            <div className="h-[5rem] mb-6 lg:mb-10 lg:h-[10%] md:block hidden">
              <img src={Microphone} alt="microphone" className="mx-auto h-[100%] " />
            </div>
            <div className="mb-10 w-[10.785rem] pt-16 md:pt-0 mx-auto">
              <Button label={'Upload Audio'} />
            </div>
          </div>
        </div>

        <div className="w-6 md:w-12 h-6 md:h-12 absolute  right-8 md:right-10 bottom-6">
          <img src={ChatIcon} alt="chat icon" className="w-[100%] h-[100%] cursor-pointer " />
        </div>
      </main>
      <section className="bg-white">
        <div className="pt-[60px] ">
          <h3 className="text-center text-xl pb-12 md:pb-32 md:text-[40px] text-[#292d32] font-bold ">
            4 Simple clicks gets you there
          </h3>
          <div className="md:flex justify-between items-center flex-wrap">
            <div className="mx-auto pb-5">
              <h3 className="border border-solid border-black border-opacity-10 rounded-[50%] md:w-[74px] md:h-[74px] h-9 w-9   text-center grid items-center text-base md:text-[32px] mx-auto">
                1
              </h3>
              <p className="mx-auto w-44 md:w-52  text-center md:font-bold md:text-2xl text-[14px] pt-3 md:pt-8">
                Upload Your Audio Podcast (mp4, wav, m4a)
              </p>
            </div>
            <div className="mx-auto pb-5">
              <h3 className="border border-solid border-black border-opacity-10 rounded-[50%] md:w-[74px] md:h-[74px] h-9 w-9   text-center grid items-center text-base md:text-[32px] mx-auto ">
                2
              </h3>
              <p className="mx-auto w-44 md:w-52  text-center md:font-bold md:text-2xl text-[14px] pt-3 md:pt-8">
                Choose Your Options
              </p>
            </div>
            <div className="border border-solid border-black border-opacity-10 hidden md:grid"></div>
            <div className="mx-auto pb-5">
              <h3 className="border border-solid border-black border-opacity-10 rounded-[50%] md:w-[74px] md:h-[74px] h-9 w-9   text-center grid items-center text-base md:text-[32px] mx-auto">
                3
              </h3>
              <p className="mx-auto w-44 md:w-52  text-center md:font-bold md:text-2xl text-[14px] pt-3 md:pt-8">
                Customize Scene and Character
              </p>
            </div>
            <div className="mx-auto pb-5">
              <h3 className="border border-solid border-black border-opacity-10 rounded-[50%] md:w-[74px] md:h-[74px] h-9 w-9  text-center grid items-center text-base md:text-[32px] mx-auto ">
                4
              </h3>
              <p className="mx-auto w-44 md:w-52  text-center md:font-bold md:text-2xl text-[14px] pt-3 md:pt-8">
                Customize Scene and Character
              </p>
            </div>
          </div>
          <div className="mb-10 w-[10.785rem] pt-16 md:pt-0 mx-auto">
            <Button label={'get started'} />
          </div>
        </div>
      </section>
      <section className="bg-[#fbfbfb] ">
        <h3 className="text-[292d32] pt-20  text-center font-bold text-xl pb-10 md:pb-[72px] md:text-[40px]">
          What people are saying
        </h3>
        <div className="md:flex flex-wrap gap-12 justify-around pb-[40px] md:px-6">
          <article className=" px-8 bg-white w-[261px] mx-auto md:w-[378px]  mb-12 md:mb-0 md:px-8 md:h-52 h-36 grid items-center relative rounded-lg md:rounded-2xl  md:pb-0">
            <div className=" h-12 w-12 md:h-[69] md:w-[69] absolute top-0 left-[50%]  translate-x-[-50%] translate-y-[-50%] ">
              <img src={MarkImg} alt="Mark Essien" className="w-full h-full" />
            </div>
            <img src={Quotes} alt="" className="pt-[34px] md:pt-12 mx-auto" />
            <p className="text-center text-black opacity-60 text-xs md:text-base italic">
              Voxclips is the ideal app for intriguing my listeners. It has helped me gain more
              views and engagements and I love it
            </p>
            <h5 className="text-center pb-6 text-[11px] md:text-base ">Mark Essien</h5>
          </article>
          <article className=" px-8 bg-white md:w-[378px]  w-[261px] mx-auto mb-12 md:mb-0 md:px-8 md:h-52 h-36 grid items-center relative rounded-lg md:rounded-2xl  md:pb-0">
            <div className=" h-12 w-12 md:h-[69] md:w-[69] absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <img src={LavyImg} alt="Mark Essien" className="w-full h-full" />
            </div>
            <img src={Quotes} alt="" className="pt-[34px] md:pt-12 mx-auto" />
            <p className="text-center text-black opacity-60 text-xs md:text-base w-48 mx-auto mb-2 italic">
              I stumbled on this app by accident and to be honest, this has been the best mistake of
              my life
            </p>
            <h5 className="text-center pb-6 text-[11px] md:text-base ">Lavy Engine</h5>
          </article>
          <article className=" px-8 bg-white w-[261px] md:w-[378px]  mx-auto mb-12 md:mb-0 md:px-8 md:h-52 h-36 grid items-center relative rounded-lg md:rounded-2xl md:pb-0">
            <div className=" h-12 w-12 md:h-[69] md:w-[69] absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <img src={NonsoImg} alt="Mark Essien" className="w-full h-full" />
            </div>
            <img src={Quotes} alt="" className="pt-[34px] md:pt-12 mx-auto" />
            <p className="text-center text-black opacity-60 text-xs md:text-base italic">
              Simple, Straightforward and works Nahh. To good to be true
            </p>
            <h5 className="text-center pb-6 text-[11px] md:text-base ">Nonso</h5>
          </article>
        </div>
      </section>
      <section className="py-20 bg-white px-8">
        <div className="flex justify-around items-center">
          <article>
            <h3 className="font-bold md:text-[32px] text-base mb-3 md:mb-8 w-44 md:w-[365px] md:leading-[50px]  text-sec">
              Conveniently download your output on different video qualities
            </h3>
            <Button label={"Let's Go"} />
          </article>
          <div>
            <div className="flex justify-between-items-center  md:gap-10 gap-[10px] mb-[10px] md:mb-10 ">
              <div className="bg-[#fbfbfb]  md:gap-10 gap-[10px] rounded p-2.5 md:p-[30px] md:h-32 md:w-32 h-16 w-16">
                <p className="text-black text-[8px] border-[1px] border-black border-solid h-full w-full rounded grid items-center justify-center  md:text-base">
                  1080p
                </p>
              </div>
              <div className="bg-[#fbfbfb] rounded p-2.5 md:p-[30px] md:h-32 md:w-32 h-16 w-16">
                <p className="text-black text-[8px] border-[1px] border-black border-solid h-full w-full rounded grid items-center justify-center md:text-base ">
                  720p
                </p>
              </div>
            </div>
            <div className="flex justify-between-items-center md:gap-10 gap-[10px] ">
              <div className="bg-[#fbfbfb] rounded p-2.5 md:p-[30px] md:h-32 md:w-32 h-16 w-16">
                <p className="text-black text-[8px] border-[1px] border-black border-solid h-full w-full rounded grid items-center justify-center  md:text-base">
                  480p
                </p>
              </div>
              <div className="bg-[#fbfbfb] rounded p-2.5 md:p-[30px] md:h-32 md:w-32 h-16 w-16">
                <p className="text-black text-[8px] border-[1px] border-black border-solid h-full w-full rounded grid items-center justify-center  md:text-base">
                  4k
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-sec ">
        <div className="md:flex items-center justify-around py-[60px] md:py-32  ">
          <article className="">
            <div className="flex items-center justify-center mb-4 md:mb-8 gap-4 md:gap-8">
              <div className="w-[72px] h-[72px] md:w-32 md:h-32 rounded-[50%] bg-white border-2 boder-solid grid items-center justify-center ">
                <img
                  src={Avatar1}
                  alt="animetad image"
                  className=" h-[100%] w-[100%] mx-auto object-cover p-0 "
                />
              </div>
              <div className="w-[72px] h-[72px] md:w-32 md:h-32 rounded-[50%] bg-white border-2 boder-solid grid items-center justify-center ">
                <img
                  src={Avatar2}
                  alt="animetad image"
                  className=" h-[100%] w-[100%] mx-auto object-cover p-0 "
                />
              </div>
              <div className="w-[72px] h-[72px] md:w-32 md:h-32 rounded-[50%] bg-white border-2 boder-solid grid items-center justify-center ">
                <img
                  src={Avatar3}
                  alt="animetad image"
                  className=" h-[100%] w-[100%] mx-auto object-cover p-0 "
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 md:gap-8">
              <div className="w-[72px] h-[72px] md:w-32 md:h-32 rounded-[50%] bg-white border-2 boder-solid grid items-center justify-center ">
                <img
                  src={Avatar4}
                  alt="animetad image"
                  className=" h-[100%] w-[100%] mx-auto object-cover p-0 "
                />
              </div>
              <div className="w-[72px] h-[72px] md:w-32 md:h-32 rounded-[50%] bg-white border-2 boder-solid grid items-center justify-center ">
                <img
                  src={Avatar5}
                  alt="animetad image"
                  className=" h-[100%] w-[100%] mx-auto object-cover p-0 "
                />
              </div>
              <div className="w-[72px] h-[72px] md:w-32 md:h-32 rounded-[50%] bg-white border-2 boder-solid grid items-center justify-center ">
                <img
                  src={Avatar6}
                  alt="animetad image"
                  className=" h-[100%] w-[100%] mx-auto object-cover p-0 "
                />
              </div>
            </div>
          </article>
          <article className="w-[217px] mx-auto md:mx-0 md:w-[434px] ">
            <h3 className="text-white font-bold text-center mt-11 md:mt-0 text-xl md:text-[32px] md:leading-[50px] ">
              Freestyle with various diverse characters and share on any social platform
            </h3>
          </article>
        </div>
      </section>
    </Layout>
  );
};
export default Home;
