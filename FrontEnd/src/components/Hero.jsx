import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border-gray-400'>
        {/* Hero LEFT */}
        <div className='w-full sm:w-1/2 flex items-center justify py-10 sm:py-0'>
        <div className='text-[#414141]'>
            <div className='flex items-center gap-2'>
                 <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                 <p className='font-medium text-sm md:text-base' >OUR BEST SELLER </p>
            </div>
            <h1 className='text3xl sm:py-3  lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
        </div>

        </div>

        {/* Hero RIGHT */}
        <div></div>
      
    </div>
  );
};

export default Hero;
