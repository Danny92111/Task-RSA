import React, { useState } from "react";

function Option({
	title,
	text,
	priceMonthly,
	priceAnnually,
	setGrandTotal,
	grandTotal,
	isMonthly,
}) {
	// toggle state of btn
	const [btnToggle, setBtnToggle] = useState(false);
	// get current Price (0 if not selected , actual price if selected)
	const [currentPrice, setCurrentPrice] = useState(priceMonthly);
	return (
		<div className="option__container">
			<div className="option__container-flex">
				<h1 className="option__title">{title}</h1>
				<p className="option__price">
					{isMonthly
						? `£${priceMonthly} per month `
						: `£${priceAnnually} per annum `}
				</p>
			</div>
			<p className="option__description">{text}</p>
			<button
				onClick={(e) => {
					//toggle the btn
					setBtnToggle(!btnToggle);
					//change text of btn
					const changeText = (e) => {
						!btnToggle
							? (e.target.innerHTML = "Remove")
							: (e.target.innerHTML = "Select this extra");
					};
					changeText(e);
					// change isSelected var accordingly
					const addCurentPrice = () => {
						btnToggle
							? setCurrentPrice(priceMonthly)
							: setCurrentPrice(-priceMonthly);
					};
					addCurentPrice();
					setGrandTotal(grandTotal + currentPrice);
				}}
				className={`option__button ${btnToggle && "option__selected"}`}
			>
				Select this extra
			</button>
		</div>
	);
}

export default Option;
