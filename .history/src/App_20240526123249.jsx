import logo from "./assets/investment-calculator-logo.png";
import UserInputs from "./components/Inputs";
import { useState } from "react";
function App() {

  
    const [userInput, setUserInput] = useState({
      initialInvestment: 1000,
      annualInvestment: 30,
      expectedReturn: 40,
      duration: 2,
    });
  
    function onTyping(inputIdentifier, newValue) {
      setUserInput((prevInput) => {
        return {
          ...prevInput,
          [inputIdentifier]: newValue,
        };
      });
    }


  return (
    <>
      <div id="header">
        <img src={logo} alt="" srcset="" />
        <h1>Invesment Calculator</h1>
      </div>
      <UserInputs userInput={userInput} onChange={onTyping} />
      <result userInput={userInput}  />
    </>
  );
}

export default App;
