import { calculateInvestmentResults } from "../util/investment.js";

export default function Result({ userInput }) {
  const investmentResults = calculateInvestmentResults(userInput);
  console.log(investmentResults);

  return (
    <section>
      <h1>Result</h1>
      <table id="table">
        <thead>
          <td>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (year)</th>
            <th>Total Interest</th>
            <th>Invested Captial</th>
          </td>
        </thead>
        <tbody>{investmentResults.map((yearData) => {
            <tr>
                <td>{yearData.year}</td>
                <td>{yearData.investmentValue}</td>
                <td>{yearData.interest}</td>
                <td>{yearData.totalInterest}</td>
                <td>{yearData.investedCapital}</td>
            </tr>
        })}</tbody>
      </table>
    </section>
  );
}
