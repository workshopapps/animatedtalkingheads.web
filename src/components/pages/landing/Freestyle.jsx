import React from 'react';
import arrowBack from '../../../assets/icons/free_style.svg';

const Freestyle = () => {
  return (
    <section className="bg-sec-700 py-20">
      <div className="mx-auto max-w-[1440px] w-[90%] grid md:grid-cols-2 text-white">
        <div data-aos="fade-right" className="w-[80%] mx-auto ">
          <img src={arrowBack} className="w-full" alt="images of characters" />
        </div>
        <div data-aos="fade-left" className="w-[80%] flex justify-center items-center mx-auto my-5">
          <p className="font-bold text-lg lg:text-4xl text-center">
            Freestyle with various diverse characters and share on any social platform
          </p>
        </div>
      </div>
    </section>
  );
};

export default Freestyle;
