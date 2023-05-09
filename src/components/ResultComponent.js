import React from 'react';

const ResultComponent = () => {
  return (
    <section className="py-6 text-white bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue text-center flex flex-col flex-1 items-center justify-center align-middle px-2 rounded-3xl">
        <h1 className='font-bold text-tWhite mb-6'>Your Result</h1>
        <div className="mb-6 bg-gradient-to-b from-violetBlue to-persianBlue rounded-full sm:h-36 sm:w-36 justify-center items-center align-middle">
            <h2 className='sm:text-6xl font-extrabold'>76</h2>
            <p className='text-tWhite'>of 100</p>
        </div>
        <h3 className="font-bold  text-xl mb-6">Great</h3>
        <p className='font-medium'>You scored higher than 65% of the people who have taken these tests.</p>
    </section>
  );
};

export default ResultComponent;