import React from "react";
import './Bage.css';

const Bage = ({symbol}) => {
	return (
		<span data-content={symbol} className={'bage'}> </span>
	);
};

export default Bage;
