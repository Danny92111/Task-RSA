import React, { useState, useEffect, useRef } from "react";

function Option({
	title,
	text,
	priceMonthly,
	priceAnnually,
	setGrandTotal,
	isMonthly,
	setCountAddons,
}) {
	// Store state of btn
	const [btnToggle, setBtnToggle] = useState(false);

	// Store current Price (on btn click toggle between priceMonthly and -priceMonthly || on btn click toggle between priceAnnually and -priceAnnually)
	const [currentPrice, setCurrentPrice] = useState(priceMonthly);

	//  avoid initial render on UseEffect (useRef)
	const firstRender = useRef(true);

	useEffect(() => {
		//  avoid initial render on UseEffect
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}
		// toggle between priceMonthly and priceAnnually
		if (isMonthly) {
			setCurrentPrice(priceMonthly);
		} else {
			setCurrentPrice(priceAnnually);
		}
		// Add the price to a grand total of addons
		if (btnToggle && !isMonthly) {
			setCurrentPrice(-priceAnnually);
			setGrandTotal((grandTotal) => grandTotal + priceAnnually - priceMonthly);
		} else if (btnToggle && isMonthly) {
			setCurrentPrice(-priceMonthly);
			setGrandTotal((grandTotal) => grandTotal - priceAnnually + priceMonthly);
		}
	}, [isMonthly]);
	// Add addon price
	const addCurentPrice = () => {
		if (isMonthly) {
			btnToggle
				? setCurrentPrice(priceMonthly)
				: setCurrentPrice(-priceMonthly);
		} else {
			btnToggle
				? setCurrentPrice(priceAnnually)
				: setCurrentPrice(-priceAnnually);
		}
	};
	//change text of btn
	const changeText = (e) => {
		!btnToggle
			? (e.target.innerHTML = "Remove")
			: (e.target.innerHTML = "Select this extra");
	};
	// Toggle the btn
	const toggleBtn = (input) => {
		!input
			? setCountAddons((countAddons) => countAddons + 1)
			: setCountAddons((countAddons) => countAddons - 1);
	};

	return (
		<div data-testid="optionComponent" className="option__container">
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
					toggleBtn(btnToggle);
					// store the current price and add it to grandTotal
					addCurentPrice();
					setGrandTotal((grandTotal) => grandTotal + currentPrice);
					//change text of btn
					changeText(e);
				}}
				className={`option__button ${btnToggle && "option__selected"}`}
			>
				Select this extra
			</button>
		</div>
	);
}

export default Option;
