import React from "react";
import styles from './Bage.module.scss';
import {propTypes} from './Bage-prop';

export const Bage = ({symbol}) => {
	return (
		<span data-content={symbol} className={styles.bage}> </span>
	);
};

Bage.propTypes = propTypes;
