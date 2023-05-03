import React from 'react';

const ResultComponent = () => {
  return (
    <div className="result p-8 text-center text-white bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue">
        <h1 className='mb-6 font-bold text-tWhite'>Your Result</h1>
        <div className="totalScore flex items-center justify-center sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full bg-gradient-to-b from-violetBlue to-persianBlue">
            <div className='items-center justify-center flex-col'>
              <h2 className='text-3xl font-extrabold'>76</h2>
              <p className='text-tWhite'>of 100</p>
            </div>
        </div>
        <h3 className="font-bold my-6">Great</h3>
        <p className='font-medium px-4'>You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  );
};

export default ResultComponent;