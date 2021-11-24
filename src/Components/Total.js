import React, { useState } from "react";
import data from "../db.json";

function Total({ FinalPrice, setMonthly }) {
	//get quote
	let info = data.quote[0];
	// store total value
	const [monthlyTotal, setMonthlyTotal] = useState(true);
	setMonthly(monthlyTotal);
	return (
		<div className="total_container">
			<h1 className="total__price">
				£
				{monthlyTotal
					? FinalPrice.toFixed(2)
					: (FinalPrice - info.monthlyPrice + info.annualPrice).toFixed(2)}
			</h1>
			<h2 className="total__monthly-yearly">
				{monthlyTotal ? "per month" : "per annum"}
			</h2>
			<p className="total__description">
				This price includes Insurance Premium Tax at the current rate. No charge
				for paying monthly.
			</p>
			<button
				onClick={(e) => {
					setMonthlyTotal(!monthlyTotal);
					const changeText = (e) => {
						!monthlyTotal
							? (e.target.innerHTML = "Switch to annually")
							: (e.target.innerHTML = "Switch to monthly");
					};
					changeText(e);
				}}
				className="total__button"
			>
				Switch to annual
			</button>
		</div>
	);
}

export default Total;
