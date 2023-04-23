import React from 'react';
import { Button } from "reactstrap";

const SummaryComponent = () => {
  return (
    <div className="summary px-6 py-10">
          <h3 className="font-medium">Summary</h3>
          <ul>
            <li>Reaction
            80 / 100</li>

            <li>Memory
            92 / 100</li>

            <li >Verbal
            61 / 100</li>

            <li className="mx-auto max-width-sm">Visual
            72 / 100</li>
          </ul>
          <Button className="px-8 rounded-full border">
            Continue
          </Button>
        </div>
  );
};

export default SummaryComponent;