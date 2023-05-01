import { Container, Row, Col } from "reactstrap";
import SummaryComponent from "./components/SummaryComponent";
import ResultComponent from "./components/ResultComponent";

function App() {
  return (
    <div className="App">
      <div className="wrapper flex ">
        <ResultComponent />
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
