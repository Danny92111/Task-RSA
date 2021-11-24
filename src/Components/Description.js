import React from "react";
import data from "../db.json";

function Description() {
	//get quote
	let info = data.quote[0];

	return (
		<div className="description__container">
			<h1 className="description__title padding-left">Hey {info.firstName},</h1>
			<p className="description__location padding-left">
				Here is your quote for {info.address1}, {info.address2}
			</p>
			<p className="description__reference padding-left">{info.quoteRef}</p>
			<p className="description__startDate padding-left">
				Covers starts on {info.startDate.substring(0, 10)}
			</p>
		</div>
	);
}

export default Description;
