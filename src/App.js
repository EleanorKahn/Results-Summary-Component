import { Button } from "reactstrap";
import "./css/style.css";
import './css/App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="result">
            <h3>Your Result</h3>
            <div className="totalScore">
              <h1>76</h1>
              <p>of 100</p>
            </div>
            <h2>Great</h2>
            <p>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
        <div className="summary">
          <h3>Summary</h3>
          <ul>
            <li>Reaction
            80 / 100</li>

            <li>Memory
            92 / 100</li>

            <li>Verbal
            61 / 100</li>

            <li>Visual
            72 / 100</li>
          </ul>
          <Button>
            Continue
          </Button>
        </div>
      </div>
  
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Eleanor</a>.
      </div>
    </div>
  );
}

export default App;
