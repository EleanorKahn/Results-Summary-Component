import "./css/style.css";
import './css/App.css';
import SummaryComponent from "./components/SummaryComponent";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="result">
            <h3>Your Result</h3>
            <div className="totalScore">
              <h1 className="extrabold">76</h1>
              <p>of 100</p>
            </div>
            <h2 className="font-bold">Great</h2>
            <p>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
        <SummaryComponent />
      </div>
  
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Eleanor</a>.
      </div>
    </div>
  );
}

export default App;
