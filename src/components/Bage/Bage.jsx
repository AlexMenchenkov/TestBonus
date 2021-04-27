import React from "react";
import './Bage.scss';
import {props} from './Bage-prop';

const Bage = ({symbol}) => {
	return (
		<span data-content={symbol} className={'bage'}> </span>
	);
};

Bage.propTypes = props;

export default Bage;
