import { useState } from "react"

export default function userInput() {

    const [userInput,setUserInput] = useState({
        initialInvestment:1000,
        annualInvestment:30,
        expectedReturn:40,
        duration:2,
    });

    function handleChange(inputIdentifier,newValue){
        setUserInput((prevInput) =>{
            return{
                ...prevInput,
                [inputIdentifier]:newValue,
            };
        });
    }
    return (
        <section id='user-input'>
            <div className="input-group">
                <p>
                <label htmlFor="">Intial investment</label>
                <input type="number" name="initialInvestment" value={userInput.initialInvestment} id="initialInvestment" handleChange={(event) => handleChange('initialInvestment',event.target.value)} />
                </p>
                <p>
                <label htmlFor="">Annual Investment</label>
                <input type="number" name="Duration" value={userInput.annualInvestment} id="annualInvestment" handleChange={(event) => handleChange('annualInvestment',event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                <label htmlFor="">Intial investment</label>
                <input type="number" name="expectedReturn"  value={userInput.expectedReturn} id="initialInvestment" handleChange={(event) => handleChange('initialInvestment',event.target.value)} />
                </p>
                <p>
                <label htmlFor="">Duration</label>
                <input type="number" name="Duration"  value={userInput.initialInvestment} id="Duration" handleChange={(event) => handleChange('Duration',event.target.value)} />
                </p>
            </div>
        </section>
    )
}