export default function userInput({handleChange }) {


  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Intial investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={userInput.initialInvestment}
            id="initialInvestment"
            handleChange={(event) =>
              handleChange("initialInvestment", event.target.value)
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
            handleChange={(event) =>
              handleChange("annualInvestment", event.target.value)
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
            handleChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            name="duration"
            value={userInput.duration}
            id="duration"
            handleChange={(event) =>
              handleChange("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
