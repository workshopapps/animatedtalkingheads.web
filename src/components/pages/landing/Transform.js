import React from 'react';
import arrowBack from '../../../assets/icons/transform.svg';

const Transform = () => {
  return (
    <section className="bg-sec-700  py-20 text-white">
      <div className="max-w-[1440px] w-[90%] mx-auto my-10">
        <p className="font-bold mb-10 w-[70%] mx-auto text-lg lg:text-4xl text-center">
          Transform your audio podcast contents to amazing videos of form of talking heads
        </p>
        <div className="mx-auto  grid md:grid-cols-2 text-white">
          <div className="w-[90%] grid gap-5 my-5 text-sm lg:text-xl">
            <p className="">
              Voxclip is the #1 rated Animated Video creation platform. Thousands of podcasters use
              it to create animated content to connect better with their audience and also increase
              their brand awareness.
            </p>
            <p className="">
              Say Goodbye to the old boring traditional audio podcasts Voxclips gives you the
              opportunity to bring your imagination to life, connect better with your listeners
              viewers and drop content more creatively
            </p>
          </div>
          <div className="w-[90%] mx-auto ">
            <img src={arrowBack} className="w-full" alt="images of characters" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transform;
