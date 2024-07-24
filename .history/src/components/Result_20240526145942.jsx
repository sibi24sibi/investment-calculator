import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ userInput }) {
  const investmentResults = calculateInvestmentResults(userInput);
  const initialInvestments =
    resultsData[0].valueEndOfYear - resultsData[0].annualInvestment;

  return (
    <section>
      <table id="result">
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
          {investmentResults.map((yearData) => {
            const totalInterest = yearData.valueEndOfYear;
            yearData.annualInvestment * yearData.year - intialInvestment;
            const totalAmountInterest = yearData.valueEndOfYear - totalInterest;

            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInterest)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}