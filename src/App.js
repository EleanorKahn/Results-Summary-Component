import SummaryComponent from "./components/SummaryComponent";
import ResultComponent from "./components/ResultComponent";

function App() {
  return (
    <div className="App">
      <main className="wrapper sm:flex">
        <ResultComponent />
        <SummaryComponent />
      </main>
  
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Eleanor</a>.
      </div>
    </div>
  );
}

export default App;
