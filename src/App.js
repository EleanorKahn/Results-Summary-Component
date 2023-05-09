import SummaryComponent from "./components/SummaryComponent";
import ResultComponent from "./components/ResultComponent";

function App() {
  return (
    <div className="App sm:flex sm:items-center sm:justify-center sm:h-screen sm:max-w-2xl sm:mx-auto">
      <main className="wrapper sm:flex rounded-3xl">
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
