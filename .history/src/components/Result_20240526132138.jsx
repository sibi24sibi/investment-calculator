import { calculateInvestmentResults } from "../util/investment.js";

export default function Result({ userInput }) {
  const investmentResults = calculateInvestmentResults(userInput);
  console.log(investmentResults);

  return (
    <section>
      <h1>Result</h1>
      <table id="result">
        <thead>
          <td>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (year)</th>
            <th>Total Interest</th>
            <th>Invested Captial</th>
          </td>
        </thead>
        <tbody>
          {investmentResults.map((yearData) => {
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
