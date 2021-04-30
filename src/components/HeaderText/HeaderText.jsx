import React from "react";
import styles from './HeaderText.module.scss';
import {propTypes} from './HeaderText-prop';

export const HeaderText = ({text}) => {

	return (
		<div className={styles.blockText}>{text}</div>
	);
};

HeaderText.propTypes = propTypes;
