import React, { useState, useRef, useEffect } from "react";

function Description({ firstName, address1, address2, reference, startDate }) {
	// get state of address change btn
	const [changeBtnClicked, setChangeBtnClicked] = useState(false);
	const [newAddress, setNewAddress] = useState("");
	const [addressSubmited, setAddressSubmited] = useState(false);
	// return input el + submit btn
	const ShowInputCont = () => (
		<div className="set-address">
			<input
				placeholder=" Address..."
				onChange={(e) => {
					setNewAddress(e.target.value);
				}}
			></input>
			<button
				onClick={() => {
					if (newAddress) {
						setChangeBtnClicked(false);
						setAddressSubmited(true);
					} else {
						alert("Please enter a new address");
						setChangeBtnClicked(true);
						setAddressSubmited(false);
					}
				}}
			>
				Submit
			</button>
		</div>
	);

	return (
		<div data-testid="descriptionComponent" className="description__container">
			<h1 data-testid="name" className="description__title padding-left">
				Hey {firstName},
			</h1>
			<div data-testid="address" className="description__addressContainer">
				<p className="description__location padding-left">
					{changeBtnClicked ? (
						<span>Enter a new address</span>
					) : (
						"Here is your quote for:"
					)}{" "}
					{}
					{changeBtnClicked
						? ShowInputCont()
						: addressSubmited
						? newAddress
						: `${address1} , ${address2}`}
				</p>
				<p
					onClick={() => {
						setChangeBtnClicked(true);
					}}
					className={`Change-Btn ${changeBtnClicked && "address-invisible"}`}
				>
					Change Address
				</p>
			</div>

			<p
				data-testid="reference"
				className="description__reference padding-left"
			>
				{reference}
			</p>
			<p data-testid="date" className="description__startDate padding-left">
				Covers starts on {startDate && startDate.substring(0, 10)}
			</p>
		</div>
	);
}

export default Description;
