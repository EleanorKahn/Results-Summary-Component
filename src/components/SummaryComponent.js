import React from 'react';
import { Button } from "reactstrap";

const SummaryComponent = () => {
  return (
    <div className="summary px-6 py-10">
          <h3 className="font-medium">Summary</h3>
          <ul>
            <li className='text-lightRed'>Reaction
            <span>80 / 100</span></li>

            <li className='text-orangeYellow'>Memory
            <span>92 / 100</span></li>

            <li className='text-greenTeal-400'>Verbal
            <span>61 / 100</span></li>

            <li className="text-cobaltBlue mx-auto max-width-sm">Visual
            <span>72 / 100</span></li>
          </ul>
          <Button className="px-8 rounded-full border">
            Continue
          </Button>
        </div>
  );
};

export default SummaryComponent;