import { useState } from "react"

export default function Input() {

    useState(
        
    );
    return (
        <section id='user-input'>
            <div className="input-group">
                <p>
                <label htmlFor="">Intial investment</label>
                <input type="number" name="initialInvestment" id="initialInvestment" />
                </p>
                <p>
                <label htmlFor="">Duration</label>
                <input type="number" name="Duration" id="Duration" />
                </p>
            </div>
            <div className="input-group">
                <p>
                <label htmlFor="">Intial investment</label>
                <input type="number" name="initialInvestment" id="initialInvestment" />
                </p>
                <p>
                <label htmlFor="">Duration</label>
                <input type="number" name="Duration" id="Duration" />
                </p>
            </div>
        </section>
    )
}