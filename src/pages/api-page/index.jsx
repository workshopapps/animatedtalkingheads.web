import React from 'react';
import Footer from '../../components/UI/Footer';
import ApiNav from '../../components/UI/ApiNav';
import { Text } from '../../components/UI/Text/index';
import { Button } from '../../components/UI/Button';
import codeImg from '../../assets/api-page-png/code.png';
import { ApiPageImages } from '../../libs/ApiPageImages';
import { SiJavascript } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { FiDatabase } from 'react-icons/fi';
import { FiSmile } from 'react-icons/fi';

import { CiMicrophoneOn } from 'react-icons/ci';
import { BsGlobe } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';

const ApiPage = () => {
  return (
    <>
      <ApiNav />
      <main className="flex flex-col items-left py-2 px-10 gap-4 items-center lg:py-20">
        <section className=" flex flex-col lg:gap-0">
          <div className="py-5 items-center flex flex-col justify-center gap:5  lg:gap-64 md:flex-row md:justify-between ">
            <div className="flex text-center flex-col gap-7 lg:gap-5 md:justify-left max-w-[500px] md:text-left">
              <div className="  md:text-left flex flex-col ">
                <Text type={'header2'} w={'bold'} className=" ">
                  {' '}
                  The best platform to create your avatar and podcasts.
                </Text>
              </div>
              <div className="flex md:flex-col md:gap-7">
                <div className="md:max-w-[550px] ">
                  <Text type={'text3'} w={'md'}>
                    Welcome to the official Voxclip API. Create with the best avatar and podcast
                    creator.
                  </Text>
                </div>
                <div className="hidden gap-4 md:flex md:flex-col lg:flex-row max-w-[250px] lg:max-w-[500px]">
                  <Button label="Register" />
                  <Button label="Documentation" ghost />
                </div>
              </div>
            </div>

            <div className="px-2 lg:basis-2/5 py-5 md:py-0">
              <img src={codeImg} alt="api-img" className=" w-[250px] sm:w-[400px] lg:w-[500px]" />
            </div>
            <div className="flex flex-col items-center gap-4 md:hidden">
              <Button label="Register As a Developer" />
              <Button label="View Documentation" ghost />
            </div>
          </div>
          <div className="flex flex-wrap justify-around py-6">
            <div className="flex gap-2">
              <div>
                <BsGlobe size={30} className="text-blue-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl">7M</span>
                <span className=" text-xs  text-gray-400">Requests/month</span>
              </div>
            </div>
            <div className="flex  gap-2">
              <div>
                <BiUserCircle size={30} className="text-blue-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl">3.2M</span>
                <span className=" text-xs  text-gray-400">Avatars</span>
              </div>
            </div>
            <div className="flex ">
              <div>
                <CiMicrophoneOn size={40} className="text-blue-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl">500+</span>
                <span className=" text-xs  text-gray-400">Podcast</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex  flex-wrap pt-36 my-0 -mx-10 gap-3 justify-center ">
            {ApiPageImages.map((image) => {
              return (
                <img
                  className=" h-[350px] w-[310px] my-0 mx-1"
                  src={image.img}
                  alt={image.name}
                  key={image.name}
                />
              );
            })}
          </div>
        </section>

        <section className="text-center sm:text-left flex flex-col gap-5 lg:py-14">
          <div className="flex flex-col  gap-5 md:flex-row lg:gap-64 md:justify-between py-10">
            <div className="flex flex-col gap-5 md:justify-left lg:max-w-[500px] md:text-left">
              <div className="  md:text-left flex flex-col ">
                <Text type={'header2'} w={'bold'} className=" ">
                  {' '}
                  Simple Combination
                </Text>
              </div>
              <div className="flex flex-col md:flex-col gap-4 sm:gap-7 text-left">
                <div className="md:max-w-[550px] py-2">
                  <Text type={'text3'} w={'md'}>
                    The Voxclips APIs is a modern PYTHON API that surfaces all of the info you will
                    need to build any avatar or podcast for your users. It’s so simple and easy to
                    use that we even run Voxclips.com on it!
                  </Text>
                </div>
                <div className="gap-4 flex flex-col w-[250px] sm:flex-row sm:w-[400px] sm:max-w-[500px]">
                  <Button label="Avatar" />
                  <Button label="Podcast" ghost />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <Text type={'text5'} w={'medium'}>
                    Official Languages:
                  </Text>
                </div>
                <div className="flex gap-4">
                  <FaPython size={30} />
                  <SiJavascript size={30} className="text-yellow-400" />
                </div>
              </div>
            </div>

            <div className="px-2  flex flex-col lg:basis-2/5 items-center ">
              <img src={codeImg} alt="api-img" className=" w-[250px] sm:w-[400px] lg:w-[500px]" />
            </div>
          </div>
          <div className="flex flex-row lg:gap-12 p-9 flex-wrap justify-around  lg:justify-around ml-6">
            <div className="flex flex-col gap-1 w-[300px]">
              <FiSmile size={30} className=" text-blue-600  " />
              <Text type={'text3'} w={'medium'}>
                Unlimited Requests
              </Text>
              <Text type={'text5'} w={'medium'}>
                Fast, flexable and without limits
              </Text>
            </div>
            <div className="flex flex-col gap-1 w-[300px]">
              <FiDatabase size={30} className=" text-blue-600" />
              <Text type={'text3'} w={'medium'}>
                We can handle any amount
              </Text>
              <Text type={'text5'} w={'medium'}>
                We trust our API so much, we even run Podcastanime.com on it.
              </Text>
            </div>
            <div className="flex flex-col gap-1 w-[300px]">
              <FiSmile size={30} className=" text-blue-600" />
              <Text type={'text3'} w={'medium'}>
                Simple Setup
              </Text>
              <Text type={'text5'} w={'medium'}>
                Whatever you are building, we make the set up easy.
              </Text>
            </div>
          </div>
        </section>
        <section className="w-screen bg-gray-200 flex flex-col items-center p-20 gap-10 ">
          <div className="flex flex-col justify-start gap-5">
            <Text type={'header2'} w={'bold'} className="max-w-[500px] text-center">
              Design and enhanced for workflow.
            </Text>
            <Text type={'text5'} w={'medium'} className="max-w-[400px] text-center">
              The Voxclip API was built to fit right into your workflow. Here are some toools.
            </Text>
          </div>
          <div className="flex flex-wrap text-center justify-around p-7 gap-4 max-w-[1200px]">
            <div className=" bg-white rounded-lg py-8 px-4">
              <div className="flex flex-col items-left">
                <Text type={'text2'} w={'medium'} className="max-w-[400px] text-left">
                  Mobile SDKs
                </Text>
              </div>
              <div>
                <Text type={'text5'} w={'medium'} className="max-w-[400px] text-left">
                  Everything you need to use to create the best avatar and a the best podcast
                  directly on our application with a fully native UI
                </Text>
              </div>
            </div>
            <div className=" bg-white rounded-lg py-8 px-4">
              <div>
                <Text type={'text2'} w={'medium'} className="max-w-[400px] text-left">
                  Libraries in your language
                </Text>
              </div>
              <div>
                <Text type={'text5'} w={'medium'} className="max-w-[400px] text-left">
                  We maintan official libraries in JaveScript, PHP and Ruby. Our community have also
                  built popular libraries in Python, Swift and more.
                </Text>
              </div>
            </div>
            <div className=" bg-white rounded-lg py-8 px-4">
              <div>
                <Text type={'text2'} w={'medium'} className="max-w-[400px] text-left">
                  Dynamically responsive products
                </Text>
              </div>
              <div>
                <Text type={'text5'} w={'medium'} className="max-w-[400px] text-left">
                  Every avatar returned by the API can be manupulated to dynamically adjust the
                  dimensions, edit and the quality of the image in real time.
                </Text>
              </div>
            </div>
            <div className=" bg-white rounded-lg py-8 px-4">
              <div>
                <Text type={'text2'} w={'medium'} className="max-w-[400px] text-left">
                  Customize your own product
                </Text>
              </div>
              <div>
                <Text type={'text5'} w={'medium'} className="max-w-[400px] text-left">
                  We try to maintain the idea that the product is yours and you can do what ever you
                  want with your avatara and podcasts
                </Text>
              </div>
            </div>
          </div>
        </section>
        <section className="h-[400px] flex flex-col p-20 gap-8 justify-center">
          <div className="flex flex-col items-center">
            <Text type={'text2'} w={'medium'} className="max-w-[400px] text-center">
              What will you create with the worlds most powerful avatar creation and podcast site?
            </Text>
          </div>
          <div className="flex flex-col items-center">
            <Button label="Register" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ApiPage;
