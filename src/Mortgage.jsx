// importing the necessary dependacies.

import React, { useState } from 'react';
import './mortgage.css'
import NavBar from './NavBar';
import logoImage from "./homeImages/LOGO.png";

// creates dynamic variables using useState hook.
function MortgageCalculator() {
  const [houseAmount, setHouseAmount] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMonthlyPayment = () => {
    const principal = parseFloat(houseAmount);
    const term = parseFloat(loanTerm) * 12; // converting years to months
    const rate = parseFloat(interestRate) / 100 / 12; // converting annual interest rate to monthly and decimal
    const monthlyInterest = Math.pow(1 + rate, term);
    const monthlyPayment = (principal * monthlyInterest * rate) / (monthlyInterest - 1);
    // Adding comma as thousands separator
    const formattedMonthlyPayment = monthlyPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setMonthlyPayment(formattedMonthlyPayment);
  };

  return (
         <div>
          <NavBar />
        <div>

      <h1 className="header">Mortgage Calculator</h1>
      <div className="mortgage-calculator-container">
        <div className="input-section">
          <label>House Amount (KES):</label>
          <input type="number" value={houseAmount} onChange={(e) => setHouseAmount(e.target.value)} />
          <br /><br />
          <label>Loan Term (years):</label>
          <input type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
          <br /><br />
          <label>Interest Rate (%):</label>
          <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
          <button className="button" onClick={calculateMonthlyPayment}>Calculate</button>
        </div>
        <div className="output-section">
          <p>Your Monthly Payment will be:</p>
          <textarea className="output-text" readOnly value={monthlyPayment ? `KES ${monthlyPayment}` : 'Please enter values to calculate.'} />
        </div>

        {/* images showing the banks. */}
        </div>
        <h3>Here are some of our financing partners:</h3>
        <div className='banks'>
        <a target='blank' href='https://equitygroupholdings.com/ke/borrow/diaspora-residential-mortgage-equity-loans'>
        <img src='src/banks/equity.jpeg'/>
        </a>
        <a target='blank' href='https://ke.kcbgroup.com/for-you/get-a-loan/mortgages/home-loan'>
        <img src='src/banks/kcb.png'/>
        </a>
        <a target='blank' href='https://ke.ncbagroup.com/loan/own-your-own-home/'>
        <img src='src/banks/ncba.jpeg'></img>
        </a>
        <a target='blank' href='https://www.nssf.or.ke/new-nssf-rates-benefits/'>
        <img src='https://www.nssf.or.ke/wp-content/uploads/2022/09/cropped-nssf_logo-2.png'></img>
        </a>
        </div>
      </div>
    </div>
    
  );
}

export default MortgageCalculator;
