import { calculateInvestmentResults } from "../util/investment.js";

export default function Result(userInput) {

    const investmentResults = calculateInvestmentResults(userInput);
  console.log( investmentResults);

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
          
        </tbody>
      </table>
    </section>
  );
}
