import React, { useState, useEffect} from 'react';
import { Button } from "reactstrap";
import data from "../data/data.json";

const SummaryComponent = () => {
  const [scores, setScores] = useState(data);

  //can we not pull data from this json file 
  //using the fetch api, as in below? Investigate
  //https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data

  // useEffect(() => {
  //   const request = "../data/data.json";
  //   fetch(request)
  //     .then((response) => {
  //       console.log("I have fetched");
  //       if (!response.ok) {
  //         console.log("response was not ok");
  //         throw new Error(`HTTP error: ${response.status}`);
  //       }
  //       console.log("before response json", response);
  //       const data = response.json();
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error(`Message: ${error}`);
  //     })
  // }, []);

  return (
    <div className="summary p-8">
          <h2 className='text-darkGrayBlue font-bold'>Summary</h2>
          <ul className="py-5 text-center list-none">
            {scores.map((score, idx) => (
              <li 
                className="h-12 flex flex-row px-5 mb-4 align-middle rounded-lg items-center justify-between" 
                key={idx} 
                style={{ 
                  color: score["text-color"], 
                  backgroundColor: score["background-color"] 
                }}
              >
                <h3 className="flex flex-row">
                  <img className="mr-2" src={score.icon} alt={score.category}/> 
                  {score.category}
                </h3>
                <span className="float-right text-slate-400"><span className="font-bold text-darkGrayBlue">{score.score}</span> / 100</span>
              </li>
            ))}
          </ul>
          <Button className="text-white bg-darkGrayBlue rounded-full">
            Continue
          </Button>
        </div>
  );
};

export default SummaryComponent;