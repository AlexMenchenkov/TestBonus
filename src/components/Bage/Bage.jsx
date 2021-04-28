import React from "react";
import styles from './Bage.scss';
import {props} from './Bage-prop';

const Bage = ({symbol}) => {
	return (
		<span data-content={symbol} className={styles.bage}> </span>
	);
};

Bage.propTypes = props;

export default Bage;
