import logo from "./assets/investment-calculator-logo.png";
import Inputs from "./components/Inputs";
function App() {
  return (
    <>
      <div id="header">
        <img src={logo} alt="" srcset="" />
        <h1>Invesment Calculator</h1>
      </div>
      <Inputs />
    </>
  );
}

export default App;
