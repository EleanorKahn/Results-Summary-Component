import React from 'react';

const ResultComponent = () => {
  return (
    <div className="result">
        <h2>Your Result</h2>
        <div className="totalScore">
            <h1 className='text-2xl font-extrabold'>76</h1>
            <p>of 100</p>
        </div>
        <h3 className="font-bold">Great</h3>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  );
};

export default ResultComponent;