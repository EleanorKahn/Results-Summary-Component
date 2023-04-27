import React from 'react';
import { Button } from "reactstrap";

const SummaryComponent = () => {
  return (
    <div className="summary">
          <h3 className='text-darkGrayBlue font-bold'>Summary</h3>
          <ul className='px-5 text-start'>
            <li className="text-lightRed bg-lightRed-100">Reaction
            <span><strong>80</strong> / 100</span></li>

            <li className='text-orangeYellow bg-orangeYellow-100'>Memory
            <span><strong>92</strong> / 100</span></li>

            <li className='text-greenTeal bg-greenTeal-100'>Verbal
            <span><strong>61</strong> / 100</span></li>

            <li className="text-cobaltBlue bg-cobaltBlue-100">Visual
            <span><strong>72</strong> / 100</span></li>
          </ul>
          <Button className="text-white bg-darkGrayBlue">
            Continue
          </Button>
        </div>
  );
};

export default SummaryComponent;