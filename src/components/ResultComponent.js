import React from 'react';

const ResultComponent = () => {
  return (
    <div className="result p-8 text-center items-center text-white">
        <h1 className='mb-8 font-bold'>Your Result</h1>
        <div className="p-4 totalScore self-center w-36 h-36 rounded-full">
            <h2 className='text-2xl font-extrabold'>76</h2>
            <p>of 100</p>
        </div>
        <h3 className="font-bold my-8">Great</h3>
        <p className='font-medium'>You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  );
};

export default ResultComponent;