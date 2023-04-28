import React, { useState, useEffect} from 'react';
import { Button } from "reactstrap";
import data from "../data/data.json";

const SummaryComponent = () => {
  const [scores, setScores] = useState(data);

  useEffect(() => {
    const request = "../data/data.json";
    fetch(request)
      .then((response) => {
        console.log("I have fetched");
        if (!response.ok) {
          console.log("response was not ok");
          throw new Error(`HTTP error: ${response.status}`);
        }
        console.log("before response json", response);
        const data = response.json();
        console.log(data);
      })
      .catch((error) => {
        console.error(`Message: ${error}`);
      })
  }, []);

  return (
    <div className="summary">
          <h2 className='text-darkGrayBlue font-bold'>Summary</h2>
          <ul className='px-5 text-start'>
            {scores.map((score, idx) => (
              <li key={idx}>
                <img src={score.icon} alt={score.category}/>
                {score.category}
                <span>{score.score} / 100</span>
              </li>
            ))}
          </ul>
          <Button className="text-white bg-darkGrayBlue">
            Continue
          </Button>
        </div>
  );
};

export default SummaryComponent;