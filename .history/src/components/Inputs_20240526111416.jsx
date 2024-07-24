import { useState } from "react"

export default function Input() {

    const [userInput,setUserInput] = useState(
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration,
    );

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
                <label htmlFor="">Duration</label>
                <input type="number" name="Duration" value={userInput.initialInvestment} id="Duration" handleChange={(event) => handleChange('Duration',event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                <label htmlFor="">Intial investment</label>
                <input type="number" name="initialInvestment" id="initialInvestment" value={userInput.initialInvestment} id="initialInvestment" handleChange={(event) => handleChange('initialInvestment',event.target.value)} />
                </p>
                <p>
                <label htmlFor="">Duration</label>
                <input type="number" name="Duration" id="Duration" value={userInput.initialInvestment} id="Duration" handleChange={(event) => handleChange('Duration',event.target.value)} />
                </p>
            </div>
        </section>
    )
}