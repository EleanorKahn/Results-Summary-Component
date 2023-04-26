import React from 'react';
import { Button } from "reactstrap";

const SummaryComponent = () => {
  return (
    <div className="summary px-6 py-10">
          <h3 className="font-medium text-left">Summary</h3>
          <ul>
            <li style={{ backgroundColor: "hsla(0, 100%, 67%, .25)", color: "hsl(0, 100%, 67%)" }}className='text-lightRed'>Reaction
            <span>80 / 100</span></li>

            <li style={{ backgroundColor: "hsla(39, 100%, 56%, .25)", color: "hsl(39, 100%, 56%)" }} className='text-orangeYellow'>Memory
            <span>92 / 100</span></li>

            <li style={{ backgroundColor: "hsla(166, 100%, 37%, .25)", color: "hsl(166, 100%, 37%)"}}className='text-greenTeal-400'>Verbal
            <span>61 / 100</span></li>

            <li style={{ backgroundColor: "hsla(234, 85%, 45%, .25)", color: "hsl(234, 85%, 45%)" }}className="text-cobaltBlue mx-auto max-width-sm">Visual
            <span>72 / 100</span></li>
          </ul>
          <Button className="px-8 rounded-full border">
            Continue
          </Button>
        </div>
  );
};

export default SummaryComponent;