import React from 'react';

const ResultComponent = () => {
  return (
    <div className="result">
        <h3>Your Result</h3>
        <div className="totalScore">
            <h1 className="extrabold">76</h1>
            <p>of 100</p>
        </div>
        <h2 className="font-bold">Great</h2>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  );
};

export default ResultComponent;