import React, { useState, useRef, useEffect } from "react";
import Logo from "../Media/Logo.png";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function Total({ FinalPrice, setMonthly, monthlyPrice, annualPrice }) {
	// store value if monthly || annually is selected
	const [monthlyTotal, setMonthlyTotal] = useState(true);
	// Pass testing for rendering the component
	const firstRender = useRef(true);
	//
	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}
		// change value if monthly || annually
		setMonthly(monthlyTotal);
	}, [monthlyTotal, setMonthly]);

	// get height from Top of page to h1 Total price for the Total bar
	const totalCostDOM = useRef(null);
	const [offset, setOffset] = useState(0);
	// Change text of total btn
	const changeText = (e) => {
		!monthlyTotal
			? (e.target.innerHTML = "Switch to annually")
			: (e.target.innerHTML = "Switch to monthly");
	};
	// Return Final Price
	const returnPrice = (isMonthly, total, monthly, annual) => {
		return isMonthly
			? parseFloat(total).toFixed(2)
			: (total - monthly + annual).toFixed(2);
	};
	useEffect(() => {
		// get current scroll position
		window.onscroll = () => {
			setOffset(window.scrollY);
		};
	}, []);

	return (
		<div
			data-testid="totalComponent"
			className={`total_container ${offset >= 282 && "sticky-stilying"}`}
		>
			<div className={`Show-Total ${offset > 250 && "Show-Total--visible"}`}>
				<h1 data-testid="FinalPriceContainer">
					Total Price £{" "}
					{returnPrice(monthlyTotal, FinalPrice, monthlyPrice, annualPrice)}
				</h1>
				<img src={Logo} alt="Logo" width="60" height="30" />
			</div>

			<h1 ref={totalCostDOM} className="total__price">
				£{" "}
				{isNaN(FinalPrice)
					? "0"
					: returnPrice(monthlyTotal, FinalPrice, monthlyPrice, annualPrice)}
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
					changeText(e);
				}}
				className="total__button"
			>
				Switch to annual
			</button>
			<div
				onClick={() => {
					window.scrollTo({ top: 0, behavior: "smooth" });
				}}
				className={`GoTopPage ${offset > 250 && "GoTopPage-visible"}`}
			>
				<ArrowUpwardIcon />
			</div>
		</div>
	);
}

export default Total;
