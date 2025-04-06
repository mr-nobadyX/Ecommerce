import React from 'react';

const Title = ({text1, text2}) => {
  return (
    <div className='inine px-20'>
      <p className='text-gray-500'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
      <p className='w-8 all other'> </p>
    </div>
  );
};

export default Title;
