import React from 'react';

const ResultComponent = () => {
  return (
    <div className="result p-8 text-center items-center text-white">
        <h1 className='mb-6 font-bold'>Your Result</h1>
        <div className="p-4 pt-10 totalScore ms-12 self-center w-40 h-40 rounded-full">
            <h2 className='text-2xl font-extrabold'>76</h2>
            <p className='text-tWhite'>of 100</p>
        </div>
        <h3 className="font-bold my-6">Great</h3>
        <p className='font-medium px-4'>You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  );
};

export default ResultComponent;