import React from 'react';

const ResultComponent = () => {
  return (
    <section className="py-6 text-white bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue text-center flex flex-col flex-1 items-center justify-center px-2 rounded-sm">
        <h1 className='font-bold text-tWhite mb-6'>Your Result</h1>
        <div className="mb-6 bg-gradient-to-b from-violetBlue to-persianBlue rounded-full sm:h-24 sm:w-24 md:h-36 md:w-36 justify-center items-center">
            <h2 className='text-3xl font-extrabold'>76</h2>
            <p className='text-tWhite'>of 100</p>
        </div>
        <h3 className="font-bold mb-6">Great</h3>
        <p className='font-medium'>You scored higher than 65% of the people who have taken these tests.</p>
    </section>
  );
};

export default ResultComponent;