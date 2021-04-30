import React from "react";
import styles from './HeaderText.module.scss';
import {props} from './HeaderText-prop';

const HeaderText = ({text}) => {

	return (
		<div className={styles.blockText}>{text}</div>
	);
};

HeaderText.propTypes = props;

export default HeaderText;
