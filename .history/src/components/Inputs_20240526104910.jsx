import { useState } from "react"

export default function Input() {

    useState(
        
    );
    return (
        <section id='user-input'>
            <div className="input-group">
                <label htmlFor="">Intial investment</label>
                <input type="number" name="initialInvestment" id="initialInvestment" />
                <label htmlFor="">Duration</label>
                <input type="number" name="Duration" id="Duration" />
            </div>
            <div className="input-group">
                <label htmlFor="">Intial investment</label>
                <input type="number" name="initialInvestment" id="initialInvestment" />
                <label htmlFor="">Duration</label>
                <input type="number" name="Duration" id="Duration" />
            </div>
        </section>
    )
}