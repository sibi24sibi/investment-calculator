export default function UserInput({ onfffChange , userInput}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Intial investment</label>
          <input
            
            name="initialInvestment"
            value={userInput.initialInvestment}
            id="initialInvestment"
            onChange={(event) =>
              onfffChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={userInput.annualInvestment}
            id="annualInvestment"
            onChange={(event) =>
              onfffChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Intial investment</label>
          <input
            type="number"
            name="expectedReturn"
            value={userInput.expectedReturn}
            id="expectedReturn"
            onChange={(event) => onfffChange("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            name="duration"
            value={userInput.duration}
            id="duration"
            onChange={(event) => onfffChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
