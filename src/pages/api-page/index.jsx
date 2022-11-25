import React from 'react';
import Footer from '../../components/UI/Footer';
import ApiNav from '../../components/UI/ApiNav';
import { Text } from '../../components/UI/Text/index';
import { Button } from '../../components/UI/Button';
import codeImg from '../../assets/api-page-png/code.png';
import mobile from '../../assets/api-page-png/mobile.png';
import desktop from '../../assets/api-page-png/desktop.png';
import workshop from '../../assets/api-page-png/workshop.png';
import diamond from '../../assets/api-page-png/diamond.png';
import { SiJavascript } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { FiDatabase } from 'react-icons/fi';
import { FiSmile } from 'react-icons/fi';

import { CiMicrophoneOn } from 'react-icons/ci';
import { BsGlobe } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import styles from "./styles.module.css";

const ApiPage = () => {
  return (
    <>
      <ApiNav />
      <main className='overflow-x-hidden'>
        <div className='flex flex-col items-left py-2 px-10 gap-4 items-center lg:py-20'>
          <section className=" flex flex-col sm:gap-11 lg:20">
            <div className="py-5 items-center lg:gap-x-20 flex flex-col justify-center md:basis-3/5 lg:flex-row lg:justify-between ">
              <div className="flex text-center flex-col gap-7 lg:gap-5 lg:justify-left lg:text-left lg:basis-3/5">
                <div className="lg:text-left flex flex-col ">
                  <h1 className="xl:text-[45px] lg:text-[26px] md:text-[35px] sm:text-[35px] text-[25px]   font-extrabold font">
                    The best platform to create your avatar and podcasts.
                  </h1>
                </div>
                <div className="flex md:flex-col md:gap-7">
                  <div>
                    <Text type={'text3'} w={'md'}>
                      Welcome to the official Voxclip API. Create with the best avatar and podcast
                      creator.
                    </Text>
                  </div>
                  <div className="hidden gap-4 lg:flex md:flex-col lg:flex-row max-w-[250px] lg:max-w-[500px]">
                    <Button label="Register as a Developer" />
                    <Button label="View Documentation" ghost />
                  </div>
                </div>
              </div>

            
              <img className='lg:w-[500px] xl:w-[600px] 2xl:w-full' src={codeImg} alt="api-img" />
                   

              <div className="flex flex-col items-center gap-4 md:hidden">
                <Button label="Register" />
                <Button label="Documentation" ghost />
              </div>
            </div>
            <div className="flex flex-wrap justify-around py-6">
              <div className="flex gap-2">
                <div className='mt-2'>
                  <BsGlobe size={30} className="text-blue-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl">7M</span>
                  <span className=" text-xs  text-gray-400">Requests/month</span>
                </div>
              </div>
              <div className="flex  gap-2">
                <div className='mt-2'>
                  <BiUserCircle size={30} className="text-blue-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl">3.2M</span>
                  <span className=" text-xs  text-gray-400">Avatars</span>
                </div>
              </div>
              <div className="flex ">
                <div className='mt-2'>
                  <CiMicrophoneOn size={40} className="text-blue-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl">500+</span>
                  <span className=" text-xs  text-gray-400">Podcast</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.images}></div>

        <div className='flex flex-col items-left py-2 px-10 gap-4 items-center lg:py-20'>
          
          <section className="text-center sm:text-left flex flex-col gap-2 lg:py-14">
            <div className="flex flex-col gap-14 lg:flex-row  py-5 lg:py-10">
              <div className="flex flex-col gap-5 md:basis-3/5 md:text-left">
                <div className="md:mt-12 md:text-left flex flex-col ">
                  <Text type={'header2'} w={'bold'} >
                    Simple Combination
                  </Text>
                </div>
                <div className="flex flex-col md:flex-col gap-11 text-left">
                  <div className="py-2 text-center sm:text-left">
                    <Text type={'text3'} w={'md'}>
                      The Voxclips APIs is a modern PYTHON API that surfaces all of the info you will
                      need to build any avatar or podcast for your users. It’s so simple and easy to
                      use that we even run Voxclips.com on it!
                    </Text>
                  </div>
                  <div className="gap-4 flex justify-center sm:justify-start">
                    <Button label="Get an Avatar" />
                    <Button label="Start a Podcast" ghost />
                  </div>
                </div>
                <div className="hidden sm:flex flex-col gap-2 ">
                  <div>
                    <Text type={'text5'} w={'medium'}>
                      Official Languages:
                    </Text>
                  </div>
                  <div className=" sm:flex gap-4">
                    <FaPython size={30} />
                    <img style={{width: "30px"}} src={diamond} alt="diamond" />
                    <SiJavascript size={30} className="text-yellow-400" />
                  </div>
                </div>
              </div>

          
              <img className='lg:w-[500px] xl:w-[600px] 2xl:w-full' src={codeImg} alt='api-img' />
              

              <div className=" flex flex-col sm:hidden gap-2">
                <div>
                  <Text type={'text5'} w={'medium'}>
                    Official Languages:
                  </Text>
                </div>
                <div className="flex justify-center sm:flex gap-4">
                  <FaPython size={30} />
                  <SiJavascript size={30} className="text-yellow-400" />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 lg:gap-12 p-9 flex-wrap justify-around  lg:justify-around ml-6">
              <div className="flex flex-col gap-1 w-[300px] justify-center">
                <div className=" text-center flex justify-center">
                  <FiSmile size={30} className=" text-blue-600" />
                </div>
                <div className=" text-center">
                  <Text type={'text3'} w={'medium'}>
                    Unlimited Requests
                  </Text>
                  <Text type={'text5'} w={'medium'}>
                    Fast, flexable and without limits
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-[300px] justify-center">
                <div className=" text-center flex justify-center">
                  <FiDatabase size={30} className=" text-blue-600" />
                </div>
                <div className=" text-center">
                  <Text type={'text3'} w={'medium'}>
                    We can handle any amount
                  </Text>
                  <Text type={'text5'} w={'medium'}>
                    We trust our API so much, we even run Podcastanime.com on it.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-[300px] justify-center">
                <div className=" text-center flex justify-center">
                  <FiSmile size={30} className=" text-blue-600" />
                </div>
                <div className=" text-center">
                  <Text type={'text3'} w={'medium'}>
                    Simple Setup
                  </Text>
                  <Text type={'text5'} w={'medium'}>
                    Whatever you are building, we make the set up easy.
                  </Text>
                </div>
              </div>
            </div>
          </section>
          <section className="w-screen bg-gray-200 flex flex-col items-center p-4 md:p-20 gap-10 ">
            <div className="flex flex-col justify-start gap-5">
              <Text type={'header2'} w={'bold'} className="max-w-[500px] text-center">
                Design and enhanced for workflow.
              </Text>
              <Text type={'text5'} w={'medium'} className="max-w-[400px] text-center">
                The Voxclip API was built to fit right into your workflow. Here are some toools.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-7 max-w-[1200px]">
              <div className="bg-white rounded-lg py-8 px-4">
                <div className='flex items-center' alt="mobile">
                  <p className={`${styles.api_content} max-w-[400px] text-left`}>
                    <h3 className={`${styles.heading} max-w-[150px] md:max-w-[250px] text-left`}>
                      Mobile SDKs
                    </h3>
                    Everything you need to use to create the best avatar and a the best podcast
                    directly on our application with a fully native UI
                  </p>

                  <img className={styles.apiImg} src={mobile} alt="mobile" />

                </div>
              </div>
              <div className="bg-white rounded-lg py-8 px-4">
                <div className='flex items-center'>
                  <p className={`${styles.api_content} max-w-[400px] text-left`}>
                    <h3 className={`${styles.heading} text-left`}>
                      Dynamically responsive products
                    </h3>
                    Every avatar returned by the API can be manupulated to dynamically adjust the
                    dimensions, edit and the quality of the image in real time.
                  </p>
                  <img className={styles.apiImg}  src={desktop} alt="desktop" />
                </div>
              </div>
              <div className=" bg-white rounded-lg py-8 px-4">
                <div className='flex items-center'>
                  <p className={`${styles.api_content} max-w-[400px] text-left`}>
                    <h3 className={`${styles.heading} max-w-[150px] md:max-w-[250px] text-left`}>
                      Libraries in your language
                    </h3>
                    We maintan official libraries in JaveScript, PHP and Ruby. Our community have also
                    built popular libraries in Python, Swift and more.
                  </p>
                  <img className={styles.apiImg}  src={desktop} alt="desktop" />
                </div>
              </div>
              <div className=" bg-white rounded-lg py-8 px-4">
                <div className='flex items-center'>
                  <p className={`${styles.api_content} max-w-[400px] text-left`}>
                    <h3 className={`${styles.heading} max-w-[150px] md:max-w-[250px] text-left`}>
                      Customize your own product
                    </h3>
                    We try to maintain the idea that the product is yours and you can do what ever you
                    want with your avatara and podcasts
                  </p>
                  <img className={styles.apiImg}  src={workshop} alt="workshop" />
                </div>
              </div>
            </div>
          </section>
          <section className="h-[400px] flex flex-col p-10 md:p-20 gap-8 justify-center">
            <div className="flex flex-col items-center text-center">
              <p className={styles.cta_text}>
                What will you create with the worlds most powerful avatar creation and podcast site?
              </p>
            </div>
            <div className="flex flex-col items-center">
              <button className={styles.btn}>Register as a Developer</button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ApiPage;
