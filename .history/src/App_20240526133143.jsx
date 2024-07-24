import logo from "./assets/investment-calculator-logo.png";
import UserInputs from "./components/Inputs";
import Result from "./components/Result";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 30,
    expectedReturn: 40,
    duration: 2,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <div id="header">
        <img src={logo} alt="" srcset="" />
        <h1>Invesment Calculator</h1>
      </div>
      <UserInputs userInput={userInput} onTyping={handleChange} />
      <Result userInput={userInput} />
    </>
  );
}

export default App;
