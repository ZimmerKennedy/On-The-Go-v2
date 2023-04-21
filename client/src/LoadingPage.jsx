import React from 'react';
import { BarLoader } from 'react-spinners';

const LoadingPage = () => {
  return (
    <div className="flex h-screen justify-center items-center overflow-hidden">
      <div className=' -z-10 bg-contain bg-no-repeat w-1/2 h-1/2 absolute'
       style={{
        backgroundImage: `url('/on-the-go-logo-navyBlue.png')`,
      }}></div>
      <div className='z-50'>
      <BarLoader height={6} width={10000} color="#0066cc" />
      </div>
    </div>
  );
};

export default LoadingPage;