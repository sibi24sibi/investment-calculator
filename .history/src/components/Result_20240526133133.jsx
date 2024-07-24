import { calculateInvestmentResults } from "../util/investment.js";

export default function Result({ userInput }) {
  const investmentResults = calculateInvestmentResults(userInput);

  return (
    <section>
      <table id="result">
        <thead>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested Captial</th>
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
