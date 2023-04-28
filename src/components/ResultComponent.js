import React from 'react';

const ResultComponent = () => {
  return (
    <div className="result p-8 text-center text-white">
        <h1 className='mb-8 font-bold'>Your Result</h1>
        <div className="totalScore justify-center items-center w-26 h-26 rounded-full">
            <h2 className='text-2xl font-extrabold'>76</h2>
            <p>of 100</p>
        </div>
        <h3 className="font-bold my-8">Great</h3>
        <p className='font-medium'>You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  );
};

export default ResultComponent;