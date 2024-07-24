import { calculateInvestmentResults } from "../util/investment.js"


export default function Result(userInput){

    const calcValue = calculateInvestmentResults(UserInput)

    return (
        <section>
            <h1>Result</h1>
            <table id="table">
                <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (year)</th>
                    <th>Total Interest</th>
                    <th>Invested Captial</th>
                </tr>
                </thead>
                <tbody>
                    {calcValue.map( (yearData) => {
                        return(
                            <tr key={yearData.year}>
                                <td>{yearData.year}</td>
                                <td>{yearData.investmentValue}</td>
                                <td>{yearData.interest}</td>
                                <td>{yearData.totalInterest}</td>
                                <td>{yearData.investedCapital}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
} 