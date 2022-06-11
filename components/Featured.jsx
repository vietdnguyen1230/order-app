import React from "react";

const images = [
  "https://images.unsplash.com/photo-1590947132387-155cc02f3212?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
  "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
];
const Featured = () => {
  return (
    <section className='relative bg-white z-1 '>
      <img
        className='absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100'
        src='https://images.unsplash.com/photo-1513104890138-7c749659a591?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
        alt='Couple on a bed with a dog'
      />

      <div className='hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent'></div>

      <div className='relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex'>
        <div className='max-w-xl text-center sm:text-left'>
          <h1 className='text-3xl font-extrabold sm:text-5xl'>
            More Rewarding.
            <strong className='font-extrabold text-[#d1411e] sm:block'>
              Less Waiting.
            </strong>
          </h1>

          <p className='max-w-lg mt-4 sm:leading-relaxed sm:text-xl font-bold'>
            Browse Our Menu
          </p>

          <div className='flex flex-wrap gap-4 mt-8 text-center'>
            <div className='block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-[#d1411e] sm:w-auto active:bg-[#d1411e] hover:bg-[#f37454] focus:outline-none focus:ring cursor-pointer'>
              Get Started
            </div>

            <div className='block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-[#d1411e] sm:w-auto hover:text-[#f37454] active:text-[#d1411e] focus:outline-none focus:ring cursor-pointer'>
              Learn More
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
