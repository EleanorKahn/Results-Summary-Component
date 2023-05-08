import React, { useState } from 'react';
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
    <section className="summary text-darkGrayBlue rounded-xl mx-4 flex-1">
          <h2 className='font-bold'>Summary</h2>
          <ul className="list-none">
            {scores.map((score, idx) => (
              <li 
                className="flex flex-1 justify-between h-10 mb-2 rounded-md items-center px-2" 
                key={idx} 
                style={{ 
                  color: score["text-color"], 
                  backgroundColor: score["background-color"] 
                }}
              >
                <h3 className="font-bold flex flex-1">
                  <img className="mr-2" src={score.icon} alt={score.category}/> 
                  {score.category}
                </h3>
                <p className="text-slate-400"><span className="font-bold text-darkGrayBlue">{score.score}</span> / 100</p>
              </li>
            ))}
          </ul>
          <button className="text-white bg-darkGrayBlue hover:bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue rounded-full w-full h-10">
            Continue
          </button>
        </section>
  );
};

export default SummaryComponent;