import { useState } from "react";
import "./App.css";
import "./style.css";
import Description from "./Components/Description";
import Total from "./Components/Total";
import Option from "./Components/Option";
import data from "../src/db.json";

function App() {
	// get addons data
	const addons = data.addons;
	// store Total Price(initial price+addons)
	const [grandTotal, setGrandTotal] = useState(0);
	// Check if it is monthly/annually
	const [monthly, setMonthly] = useState(true);

	return (
		<div className="App">
			<h1 className="main-header padding-left">home insurance</h1>
			<div className="container-flex--main">
				<Description />
				<Total
					monthly={monthly}
					setMonthly={setMonthly}
					FinalPrice={grandTotal + data.quote[0].monthlyPrice}
				/>
			</div>
			<h2 className="subHeader padding-left">
				Tailor your cover with our optional extra
			</h2>
			<div className="container-flex--secondary padding-left">
				{addons.map((addon) => (
					<Option
						isMonthly={monthly}
						grandTotal={grandTotal}
						setGrandTotal={setGrandTotal}
						title={addon.title}
						text={addon.text}
						priceMonthly={addon.monthlyPrice}
						priceAnnually={addon.annualPrice}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
