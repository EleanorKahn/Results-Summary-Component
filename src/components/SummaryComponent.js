import React from 'react';
import { Button } from "reactstrap";

const SummaryComponent = () => {
  return (
    <div className="summary">
          <h3>Summary</h3>
          <ul>
            <li style={{ backgroundColor: "hsla(0, 100%, 67%, .25)", color: "hsl(0, 100%, 67%)" }}className='text-lightRed'>Reaction
            <span><strong>80</strong> / 100</span></li>

            <li style={{ backgroundColor: "hsla(39, 100%, 56%, .25)", color: "hsl(39, 100%, 56%)" }} className='text-orangeYellow'>Memory
            <span><strong>92</strong> / 100</span></li>

            <li style={{ backgroundColor: "hsla(166, 100%, 37%, .25)", color: "hsl(166, 100%, 37%)"}}className='text-greenTeal-400'>Verbal
            <span><strong>61</strong> / 100</span></li>

            <li style={{ backgroundColor: "hsla(234, 85%, 45%, .25)", color: "hsl(234, 85%, 45%)" }}className="text-cobaltBlue mx-auto max-width-sm">Visual
            <span><strong>72</strong> / 100</span></li>
          </ul>
          <Button className="px-8 rounded-full border">
            Continue
          </Button>
        </div>
  );
};

export default SummaryComponent;