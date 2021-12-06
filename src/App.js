import { useState, useEffect } from "react";
import "./App.css";
import "./style.css";
import Description from "./Components/Description";
import Total from "./Components/Total";
import Option from "./Components/Option";

function App() {
	// Store data from fake API
	const [addonsInfo, setAddonsInfo] = useState([]);
	const [getQuote, setGetQuote] = useState([]);
	useEffect(() => {
		// Fetch addons from fake API
		const getAddons = async () => {
			const response = await fetch("http://localhost:3000/addons");
			if (!response.ok) {
				const message = alert(`An error has occured: ${response.status}`);
				return message;
			}
			const data = await response.json();
			return data;
		};
		getAddons()
			.then((data) => setAddonsInfo(data))
			.catch((error) => error.message);
		// Fetch quote from fake API
		const getQuoteData = async () => {
			const response = await fetch("http://localhost:3000/quote");
			if (!response.ok) {
				const message = `An error has occured: ${response.status}`;
				throw new Error(message);
			}
			const data = await response.json();
			return data[0];
		};
		getQuoteData()
			.then((data) => setGetQuote(data))
			.catch((error) => error.message);
	}, []);

	// store Total Price(Total price of addons)
	const [grandTotal, setGrandTotal] = useState(0);
	// Check if it is monthly/annually
	const [monthly, setMonthly] = useState(true);
	// Count nr of addons for modal
	const [countAddons, setCountAddons] = useState(0);

	return (
		<div className="App">
			<h1 className="main-header">
				<span className="type-animation">home insurance</span>
			</h1>
			<div className="container-flex--main">
				<Description
					firstName={getQuote.firstName}
					address1={getQuote.address1}
					address2={getQuote.address2}
					reference={getQuote.quoteRef}
					startDate={getQuote.startDate}
				/>
				<Total
					monthlyPrice={getQuote.monthlyPrice}
					annualPrice={getQuote.annualPrice}
					monthly={monthly}
					setMonthly={setMonthly}
					FinalPrice={grandTotal + getQuote.monthlyPrice}
				/>
			</div>
			<h2 className="subHeader">Tailor your cover with our optional extra</h2>
			<div className="container-flex--secondary">
				{addonsInfo.map((addon) => (
					<Option
						setCountAddons={setCountAddons}
						isMonthly={monthly}
						setGrandTotal={setGrandTotal}
						title={addon.title}
						text={addon.text}
						priceMonthly={addon.monthlyPrice}
						priceAnnually={addon.annualPrice}
					/>
				))}
			</div>
			<div
				className={`modal-container ${
					countAddons < 1 && "modal-container--hidden"
				}`}
			>
				<p>
					<span>{countAddons}</span> {`Addon${countAddons != 1 ? "s" : ""}`}{" "}
					selected
				</p>
			</div>
		</div>
	);
}

export default App;
