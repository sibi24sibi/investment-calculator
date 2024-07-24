import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ userInput }) {
  const investmentResults = calculateInvestmentResults(userInput);
  const initialInvestment =
        initialInvestments[0].valueEndOfYear - initialInvestments[0].interest - initialInvestments[0].annualInvestment;

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
            const totalInterest = yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year - intialInvestment;
            
            const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
