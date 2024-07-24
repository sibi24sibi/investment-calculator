export default function UserInput({ onTyping, userInput }) {
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
              onTyping("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            name="annualInvestment"
            value={userInput.annualInvestment}
            id="annualInvestment"
            onChange={(event) =>
              onTyping("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expecred Return</label>
          <input
            name="expectedReturn"
            value={userInput.expectedReturn}
            id="expectedReturn"
            onChange={(event) => onTyping("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            name="duration"
            value={userInput.duration}
            id="duration"
            onChange={(event) => onTyping("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
